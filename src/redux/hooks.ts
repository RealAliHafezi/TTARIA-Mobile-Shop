import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, Rootstate } from "./store";

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
