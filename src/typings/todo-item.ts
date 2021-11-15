import { Dayjs } from "dayjs";

export interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  time: Dayjs;
}
