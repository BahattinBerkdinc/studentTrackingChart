import { createSlice } from "@reduxjs/toolkit";
const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

const initialState = {
  students: storedStudents,
};

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);

      const studentsInLocalStorage = JSON.parse(localStorage.getItem("students")) || [];
      studentsInLocalStorage.push(action.payload);
      localStorage.setItem("students", JSON.stringify(studentsInLocalStorage));
    },
  },
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
