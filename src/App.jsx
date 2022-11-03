import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/index";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TiketPage from "./pages/TiketPage/TiketPage";
import ModalEdit from "./pages/ModalEdit/ModalEdit";
import ModalCreate from "./pages/ModalCreate/ModalCreate";
import ModalAddComment from "./pages/ModalAddComment/ModalAddComment";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/TodoList/" element={<MainPage />}>
              <Route path="create" element={<ModalCreate />}></Route>
              <Route path="edit/:cardId" element={<ModalEdit />}></Route>
            </Route>
            <Route
              path="/TodoList/tiket/:cardId"
              element={<TiketPage headerText="Todo" />}>
              <Route
                path="/TodoList/tiket/:cardId/create-comment"
                element={<ModalAddComment />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
