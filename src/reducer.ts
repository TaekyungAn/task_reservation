import { Dispatch, createContext } from "react";
import { IDummyList } from "./data/datalist";

// 모든 액션들을 위한 타입
type Action =
  | { type: "INIT"; data: IDummyList }
  | { type: "CREATE"; data: IDummyList }
  | { type: "REMOVE"; targetId: number }
  | { type: "EDIT"; data: IDummyList };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type SampleDispatch = Dispatch<Action | any>;

const reducer = (state: any, action: Action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.type;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter(
        (it: { id: number }) => it.id !== action.targetId
      );
      break;
    }
    case "EDIT": {
      newState = state.map((it: { id: number | undefined }) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }

    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export default reducer;

export const ResStateContext = createContext<IDummyList | null>(null);
export const ResDispatchContext = createContext<any | null>(null);
