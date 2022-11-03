import { createStore } from "redux";
import { cardReducer } from "./cardReducer";
import { boardReducer } from "./boardReducer";
import { filterReducer } from "./filterReducer";
import { tagReducer } from "./tagReducer";

const rootReducer = (state = {}, action = {}) => {
  return {
    card: cardReducer(state.card, action),
    filter: filterReducer(state.filter, action),
    board: boardReducer(state.board, action),
    tag: tagReducer(state.tag, action),
  };
};

export const store = createStore(rootReducer);
