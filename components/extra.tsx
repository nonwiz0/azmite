import GlobalData from "../content/global/index.json";
import { createContext } from "react";

export const ExtraContext = createContext(GlobalData.extra);
export const IsEditing = createContext(false);

export const truncate = (str, length) => {
  if (str === undefined) return "";
  return str.length > length ? str.substring(0, length) + "..." : str;
};


