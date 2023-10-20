import React, { useReducer, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "./styles/App.styled";
import { PEditRes, PNewRes, PHome } from "./pages";
import reducer, { ResDispatchContext, ResStateContext } from "./reducer";
import { IDummyList } from "./data/datalist";

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a: { id: string }, b: { id: string }) =>
          parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;

        // storage에 저장된 값을 초기값으로 설정
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  const dataId = useRef(0);
  // CREATE
  const onCreate = (
    date: number,
    {
      phone,
      guests,
      note,
      table,
      name,
      reserved_date,
      reserved_time,
    }: IDummyList
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current++,
        created_date: new Date(date).getTime(),
        phone,
        guests,
        note,
        table,
        name,
        reserved_date,
        reserved_time,
      },
    });
  };

  // REMOVE
  const onRemove = (targetId: number) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // EDIT
  const onEdit = (
    targetId: number,
    date: number,
    {
      phone,
      guests,
      note,
      table,
      name,
      reserved_date,
      reserved_time,
    }: IDummyList
  ) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        created_date: new Date(date).getTime(),
        phone,
        guests,
        note,
        table,
        name,
        reserved_date,
        reserved_time,
      },
    });
  };
  return (
    <ResStateContext.Provider value={data}>
      <ResDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <S.AppContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PHome />} />
              <Route path="/new_res" element={<PNewRes />} />
              <Route path="/edit_res" element={<PEditRes />} />
            </Routes>
          </BrowserRouter>
        </S.AppContainer>
      </ResDispatchContext.Provider>
    </ResStateContext.Provider>
  );
}

export default App;
