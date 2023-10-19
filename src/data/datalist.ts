import { ReactNode } from "react";

export interface IDummyList {
  id: number;
  name: string;
  phone: string;
  crated_date?: number;
  crated_time?: number;
  reserved_date: number;
  reserved_time: number;
  guests: number;
  table: number;
  note: string;
}

const dummyList: IDummyList[] = [
  {
    id: 1,
    name: "David",
    phone: "010-2234-5567",
    crated_date: new Date().getDate(),
    crated_time: new Date().getTime(),
    reserved_date: new Date().getDate(),
    reserved_time: new Date().getTime(),
    guests: 4,
    table: 7,
    note: "birthday",
  },
  {
    id: 2,
    name: "Jason",
    phone: "010-2234-5567",
    crated_date: new Date().getDate(),
    crated_time: new Date().getTime(),
    reserved_date: new Date().getDate(),
    reserved_time: new Date().getTime(),
    guests: 4,
    table: 7,
    note: "birthday",
  },
  {
    id: 3,
    name: "Olivia",
    phone: "010-2357-5277",
    crated_date: new Date().getDate(),
    crated_time: new Date().getTime(),
    reserved_date: new Date().getDate(),
    reserved_time: new Date().getTime(),
    guests: 4,
    table: 7,
    note: "",
  },
  {
    id: 4,
    name: "Mary",
    phone: "010-5365-7581",
    crated_date: new Date().getDate(),
    crated_time: new Date().getTime(),
    reserved_date: new Date().getDate(),
    reserved_time: new Date().getTime(),
    guests: 4,
    table: 7,
    note: "",
  },
  {
    id: 5,
    name: "Ash",
    phone: "010-0000-1167",
    crated_date: new Date().getDate(),
    crated_time: new Date().getTime(),
    reserved_date: new Date().getDate(),
    reserved_time: new Date().getTime(),
    guests: 4,
    table: 7,
    note: "",
  },
];
export { dummyList };
