import { useContext } from "react";
import ContentContext from "./ContentContext";

export default function useContent() {
  return useContext(ContentContext)
}