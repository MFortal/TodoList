import stylesModal from "../../pages/Modal/modal.module.css";
import classNames from "classnames";
import Button from "../../components/Button/Button";
import Multiselect from "../../components/Multiselect/Multiselect";
import Input from "../../components/Input/Input";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { addCardAction } from "../../store/cardReducer";
import { v4 } from "uuid";
import { useNavigate, useLocation } from "react-router-dom";

export const ModalCreate = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { boardId } = state;

  const dispatch = useDispatch();
  const addCard = (newCard) => {
    dispatch(addCardAction(newCard));
  };

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
      <div
        className={classNames(stylesModal.modal)}>
        <div className={classNames(stylesModal.modal_content)}>
          <button
            className={classNames(stylesModal.modal_close)}
            onClick={() => {
              navigate("/TodoList");
            }}
          />
          <h3 className={classNames(stylesModal.modal_header)}>Создать</h3>
          <Formik
            initialValues={{
              tags: [],
            }}
            validate={validate}
            onSubmit={(values) => {
              values.id = v4();
              values.boardId = boardId;
              navigate("/TodoList");
              addCard(values);
            }}>
            {(props) => (
              <Form className={classNames(stylesModal.modal_main)}>
                <Input
                  placeholderInput="Название"
                  placeholderText="Описание"
                  nameInput="name"
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
                {props.errors.tags && (
                  <div className={classNames("feedback")}>
                    {props.errors.tags}
                  </div>
                )}
                <Multiselect />
                <Button value={"Сохранить"} flagPlus={false} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalCreate;
