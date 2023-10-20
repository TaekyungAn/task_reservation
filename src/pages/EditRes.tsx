import * as S from "./styles/EditRes.styled";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDummyList, dummyList } from "../data/datalist";
import { RHeader } from "../components/Reservation";
import { CButton, CIcon } from "../components/CommonUI";
import { ResDispatchContext } from "../reducer";

function EditRes() {
  const { onCreate } = useContext(ResDispatchContext);

  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phone: "",
    reserved_date: 0,
    reserved_time: 0,
    created_date: new Date().toLocaleDateString(),
    guests: 0,
    table: 0,
    note: "",
  });

  const [guestNum, setGeustNum] = useState(0);
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  // 게스트 숫자 업데이트
  useEffect(() => {
    setState({
      ...state,
      guests: guestNum,
    });
  }, [guestNum]);

  // 게스트 숫자 감소 버튼 함수
  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    if (guestNum > 0) setGeustNum((prev) => prev - 1);
  };

  // 입력창 (이름, 번호, 메모) 변화 내용 저장
  const handleChangeState = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const dataId = useRef(0);
  const [data, setData] = useState<IDummyList[]>([...dummyList]);

  // 폼 제출
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (state.name.length < 1) {
      nameInput.current?.focus();
      return;
    }
    if (state.phone.length < 10) {
      phoneInput.current?.focus();
      return;
    }
    if (state.guests === 0) {
      alert("손님은 최소 1명 이상 입력해주세요");
      return;
    }
    if (window.confirm("예약을 완료하시겠습니까?")) {
      onCreate(
        state.created_date,
        state.name,
        state.phone,
        state.guests,
        state.note,
        state.table,
        state.reserved_date,
        state.reserved_time
      );
      navigate("/");
    }
  };

  return (
    <S.EditResContainer>
      <RHeader />
      <S.Information>
        <S.PersonalInfo>
          <input
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={handleChangeState}
            ref={nameInput}
          />
          <input
            placeholder="Phone"
            name="phone"
            value={state.phone}
            onChange={handleChangeState}
            ref={phoneInput}
          />
          <CButton $width={"25rem"} $bgcolor={"white"} $textcolor={"black"}>
            <CIcon $name={"event_available"} />
            Select Date
          </CButton>
        </S.PersonalInfo>
        <S.PartyInfo>
          <S.GuestesNumber>
            <span>Guests</span>
            <CButton
              $width={"5rem"}
              $bgcolor={"white"}
              $textcolor={"black"}
              onClick={handleDecrease}
            >
              <CIcon $name={"math-minus"} />
            </CButton>
            <span className="num">{guestNum}</span>
            <CButton
              $width={"5rem"}
              $bgcolor={"white"}
              $textcolor={"black"}
              onClick={(e) => {
                e.preventDefault();
                setGeustNum((prev) => prev + 1);
              }}
            >
              <CIcon $name={"math-plus"} />
            </CButton>
          </S.GuestesNumber>
          <S.TableInfo>
            <select
              name="table"
              value={state.table}
              onChange={handleChangeState}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                return (
                  <option value={item} key={item}>
                    table {item}
                  </option>
                );
              })}
            </select>
          </S.TableInfo>
        </S.PartyInfo>
        <S.AdttionalInfo>
          <textarea
            placeholder="memo"
            value={state.note}
            name="note"
            onChange={handleChangeState}
          />
        </S.AdttionalInfo>
        <CButton
          $height={"7rem"}
          $width={"100%"}
          $bgcolor={"orange"}
          $textcolor={"white"}
          onClick={handleSubmit}
        >
          Save
        </CButton>
      </S.Information>
    </S.EditResContainer>
  );
}

export default EditRes;
