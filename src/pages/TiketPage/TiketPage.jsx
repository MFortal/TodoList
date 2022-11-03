import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import classNames from "classnames";

import Input from "../../components/Input/Input";
import Tag from "../../components/Tag/Tag";
import Comment from "../../components/Comment/Comment";
import Button from "../../components/Button/Button";
import Modal from "../../pages/Modal/Modal";

import { cardSelector, boardsSelector } from "../../store/selectors";
import { updateCardAction, removeCardAction } from "../../store/cardReducer";

import styles from "./TiketPage.module.css";
import stylesModal from "../Modal/Modal.module.css";
import path from "../../icons/button.svg";

export const TiketPage = () => {
  const { cardId } = useParams();
  const card = useSelector(cardSelector).find((c) => c.id === cardId);

  const boardHeadetText = useSelector(boardsSelector).find(
    (board) => board.id === card.boardId
  ).headerText;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const updateCard = (updateCard) => {
    dispatch(updateCardAction(updateCard));
  };

  const removeCard = (id) => {
    navigate("/TodoList");
    dispatch(removeCardAction(id));
  };

  // Состояния для модалки удаления тикета
  const [activeDeleteTiket, setActiveDeleteTiket] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (values.description?.length > 0 && values.description?.length < 10) {
      errors.description = "Описание задачки должно быть больше 10 символов";
    }
    if (values.name?.length < 5) {
      errors.name = "Наименование задачки должно быть больше 5 символов";
    }
    if (!values.tags?.length) {
      errors.tags = "Выберите хотя бы 1 тег";
    }
    return errors;
  };

  return (
    <>
      <div className={classNames(styles.container)}>
        <button
          className={classNames(styles.button)}
          onClick={() => navigate("/TodoList")}>
          <img src={path} alt="" />
          <p>Вернуться к задачам</p>
        </button>
        <section className={classNames(styles.list)}>
          <div className={classNames(styles.list_header)}>
            <h3>{boardHeadetText}</h3>
            <div
              className={classNames(styles.list_btn)}
              onClick={() =>
                (document.querySelector(".pop").style.display = "flex")
              }>
              <span className={classNames(styles.list_btnElem)}></span>
              <span className={classNames(styles.list_btnElem)}></span>
              <span className={classNames(styles.list_btnElem)}></span>
            </div>
            <div className={classNames(styles.pop, "pop")}>
              <button
                className={classNames(styles.pop_close)}
                onClick={() =>
                  (document.querySelector(".pop").style.display = "none")
                }
              />
              <p
                className={classNames(styles.pop_text)}
                onClick={() => setActiveDeleteTiket(true)}>
                Удалить
              </p>
              <p className={classNames(styles.pop_text)}>Редактировать</p>
            </div>
          </div>

          <Formik
            initialValues={{
              id: card.id,
              name: card.name,
              description: card.description,
              tags: card.tags,
              comments: card.comments,
              boardId: card.boardId,
            }}
            validate={validate}
            onSubmit={(values) => {
              navigate("/TodoList");
              values.comments = card.comments;
              updateCard(values);
            }}>
            {(props) => (
              <Form className={classNames(styles.main)}>
                <Input
                  placeholderInput="Название"
                  placeholderText="Описание"
                  valueInput={props.values.name}
                  nameInput="name"
                  valueText={props.values.description}
                  nameText="description"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />

                {props.errors.description && (
                  <div className={classNames("feedback")}>
                    {props.errors.description}
                  </div>
                )}
                {props.errors.name && (
                  <div className={classNames("feedback")}>
                    {props.errors.name}
                  </div>
                )}

                <div className={classNames(styles.main_tags)}>
                  {card.tags?.map((tag, index) => {
                    return (
                      <div className={classNames(styles.tag)} key={index}>
                        <Tag flagColor={tag} />
                      </div>
                    );
                  })}
                </div>

                <div className={classNames(styles.main_comments)}>
                  {card.comments?.map((comment, index) => (
                    <Comment
                      name={comment.name}
                      text={comment.text}
                      key={index}
                      cardId={card.id}
                      commentId={comment.id}
                    />
                  ))}
                  <NavLink
                    to={`/TodoList/tiket/${card.id}/create-comment`}
                    className={classNames(styles.buttonComment)}
                    onClick={() =>
                      navigate(`/TodoList/tiket/${card.id}/create-comment`)
                    }>
                    Добавить комментарий
                  </NavLink>
                </div>
                <div className={classNames(styles.main_btn)}>
                  <Button value={"Сохранить"} flagPlus={false} />
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
      {/* Модалка для удаления тикета */}
      <Modal active={activeDeleteTiket}>
        <div className={classNames(stylesModal.modal_contentDelete)}>
          <h3 className={classNames(stylesModal.modal_headerText)}>
            Удалить тикет?
          </h3>
          <div className={classNames(stylesModal.modal_buttons)}>
            <button
              className={classNames(stylesModal.modal_btn)}
              onClick={() => {
                removeCard(card.id);
              }}>
              Да
            </button>
            <button
              className={classNames(stylesModal.modal_btn)}
              onClick={() => {
                setActiveDeleteTiket(false);
              }}>
              Нет
            </button>
          </div>
        </div>
      </Modal>

      <Outlet />
    </>
  );
};

export default TiketPage;
