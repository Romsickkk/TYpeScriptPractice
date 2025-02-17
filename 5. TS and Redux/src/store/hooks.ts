import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunctin = () => AppDispatch;

export const useCartDispatch: DispatchFunctin = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
