import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface StudentState {
  students: string[];
}

const initialState: StudentState = {
  students: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addStudent: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     state.students.push(action.payload);
    },
  },
});

export const { addStudent } = studentSlice.actions;

export const selectStudents = (state: RootState) => state.student;

export default studentSlice.reducer;
