import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addCityToLocalStorage } from "../../utils/local-storage/addDataToLc";
import { getListFromLocalStorage } from "../../utils/local-storage/getDataFromLc";
import { IUserSliceState } from "./types";

const initialState: IUserSliceState = {
  list: getListFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCityToList: (
      state,
      { payload }: PayloadAction<{ id: number; lat: number; lon: number }>
    ) => {
      console.log(payload);
      state.list.push(payload);
      addCityToLocalStorage(state.list);
    },
    deleteCityFromList: (state, { payload }: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== payload);
      addCityToLocalStorage(state.list);
      toast.error("Untracked");
    },
  },
});
export const { addCityToList, deleteCityFromList } = userSlice.actions;

export default userSlice.reducer;
