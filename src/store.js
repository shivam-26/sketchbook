import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "@/slice/menuSlice";
import ToolboxReducers from "@/slice/toolboxSlice";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    toolbox: ToolboxReducers,
  },
});
