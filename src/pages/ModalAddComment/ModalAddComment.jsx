import stylesModal from "../../pages/Modal/Modal.module.css";
import classNames from "classnames";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { addCommentAction } from "../../store/cardReducer";
import { v4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export const ModalAddComment = () => {
  const navigate = useNavigate();

  const { cardId } = useParams();

  const dispatch = useDispatch();
  const addComment = (newComment) => {
    dispatch(addCommentAction({ newComment, cardId }));
  };

  const validate = (values) => {
    const errors = {};
    if (values.name?.length < 5) {
      errors.name = "Наименование задачки должно быть больше 5 символов";
    }

    if (values.text?.length < 5) {
      errors.text = "Комментарий должен быть больше 5 символов";
    }

    return errors;
  };

  return (
    <>
      <div className={classNames(stylesModal.modal)}>
        <div className={classNames(stylesModal.modal_content)}>
          <button
            className={classNames(stylesModal.modal_close)}
            onClick={() => {
              navigate(`/TodoList/tiket/${cardId}`);
            }}
          />
          <h3 className={classNames(stylesModal.modal_header)}>
            Добавить комментарий
          </h3>
          <Formik
            initialValues={{}}
            validate={validate}
            onSubmit={(values) => {
              values.id = v4();
              navigate(`/TodoList/tiket/${cardId}`);
              addComment(values);
            }}>
            {(props) => (
              <Form className={classNames(stylesModal.modal_main)}>
                <Input
                  placeholderInput="Имя"
                  placeholderText="Комментарий"
                  nameInput="name"
                  nameText="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.name && (
                  <div className={classNames("feedback")}>
                    {props.errors.name}
                  </div>
                )}
                {props.errors.text && (
                  <div className={classNames("feedback")}>
                    {props.errors.text}
                  </div>
                )}
                {/* <button type="submit">gggggggggg</button> */}
                <Button value={"Сохранить"} flagPlus={false} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalAddComment;
