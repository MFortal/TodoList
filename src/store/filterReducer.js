import { filters } from "../mock/mock";

const CHANGE_FILTER = "CHANGE_FILTER";

export const changeFilterAction = (payload) => ({
  type: CHANGE_FILTER,
  payload,
});

const initialState = filters;

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const id = action.payload;
      return [...state].map((filter) => {
        if (filter.id === id) {
          filter.checked = !filter.checked;
        }
        return filter;
      });
    }
    default:
      return state;
  }
};
