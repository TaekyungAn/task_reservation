import styled from "styled-components";
import ResHeader from "../components/Reservation/ResHeader";
import Button from "../components/CommonUI/Button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/CommonUI/Icon";
import { IDummyList, dummyList } from "../data/datalist";

const NewResContainer = styled.header`
  background-color: ${(props) => props.theme.gray.home_background};
  width: 100%;
  height: 100%;
  min-height: 30rem;
  border-radius: 1.1rem;
  overflow: scroll;
  font-size: 1.6rem;
`;
const Information = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  & > div {
    margin-bottom: 3rem;
  }
`;
const PersonalInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  > input {
    height: 6rem;
    flex-grow: 1;
    border-radius: 1rem;
    border: 1px gray solid;
  }
`;
const DateInfo = styled.div``;
const PartyInfo = styled.div`
  display: flex;
`;
const GuestesNumber = styled.div`
  display: flex;
  & > .num {
    font-size: 3.2rem;
  }
`;
const TableInfo = styled.div``;
const AdttionalInfo = styled.div`
  & textarea {
    height: 18rem;
  }
`;

function NewRes() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phone: "",
    reserved_date: 0,
    reserved_time: 0,
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
  const onCreate = ({
    name,
    phone,
    guests,
    table,
    note,
    reserved_date,
    reserved_time,
  }: IDummyList) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      name,
      phone,
      guests,
      table,
      note,
      created_date,
      reserved_date,
      reserved_time,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  // 폼 제출
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(state);
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
      onCreate({
        name: state.name,
        guests: state.guests,
        phone: state.phone,
        table: state.table,
        note: state.note,
        reserved_date: "Today",
        reserved_time: 0,
      });
      console.log(data);

      navigate("/", { state: { data } });
    }
  };

  return (
    <NewResContainer className="NewRes">
      <ResHeader />
      <Information>
        <PersonalInfo>
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
          <Button $width={"25rem"} $bgcolor={"white"} $textcolor={"black"}>
            <Icon $name={"event_available"} />
            Select Date
          </Button>
        </PersonalInfo>
        <PartyInfo>
          <GuestesNumber>
            <span>Guests</span>
            <Button
              $width={"5rem"}
              $bgcolor={"white"}
              $textcolor={"black"}
              onClick={handleDecrease}
            >
              <Icon $name={"math-minus"} />
            </Button>
            <span className="num">{guestNum}</span>
            <Button
              $width={"5rem"}
              $bgcolor={"white"}
              $textcolor={"black"}
              onClick={(e) => {
                e.preventDefault();
                setGeustNum((prev) => prev + 1);
              }}
            >
              <Icon $name={"math-plus"} />
            </Button>
          </GuestesNumber>
          <TableInfo>
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
          </TableInfo>
        </PartyInfo>
        <AdttionalInfo>
          <textarea
            placeholder="memo"
            value={state.note}
            name="note"
            onChange={handleChangeState}
          />
        </AdttionalInfo>
        <Button
          $height={"7rem"}
          $width={"100%"}
          $bgcolor={"orange"}
          $textcolor={"white"}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Information>
    </NewResContainer>
  );
}

export default NewRes;
