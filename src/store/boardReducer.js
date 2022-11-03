import { boards } from "../mock/mock";

const initialState = boards;

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
