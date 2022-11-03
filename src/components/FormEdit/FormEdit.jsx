import stylesModal from "../../pages/Modal/Modal.module.css";
import classNames from "classnames";
import Tag from "../../components/Tag/Tag";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Multiselect from "../../components/Multiselect/Multiselect";
import { useSelector, useDispatch } from "react-redux";
import { cardSelector } from "../../store/selectors";
import { Formik, Form } from "formik";
import { updateCardAction } from "../../store/cardReducer";
import { useParams, useNavigate } from "react-router-dom";

export const FormEdit = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const updateCard = (updateCard) => {
    dispatch(updateCardAction(updateCard));
  };

  const { cardId } = useParams();

  const card = useSelector(cardSelector).find((c) => c.id === cardId);

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
          navigate(-1);
          updateCard(values);
        }}>
        {(props) => (
          <Form className={classNames(stylesModal.modal_main)}>
            <Input
              valueInput={props.values.name}
              nameInput="name"
              placeholderInput="Название"
              placeholderText="Описание"
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
              <div className={classNames("feedback")}>{props.errors.name}</div>
            )}

            <div className={classNames(stylesModal.modal_tags)}>
              {card.tags.map((tag, index) => {
                return (
                  <div key={index} className={classNames(stylesModal.tags_tag)}>
                    <button className={classNames(stylesModal.tags_delete)} />
                    <Tag flagColor={tag} />
                  </div>
                );
              })}
            </div>

            {props.errors.tags && (
              <div className={classNames("feedback")}>{props.errors.tags}</div>
            )}

            <Multiselect />
            <Button value={"Сохранить"} flagPlus={false} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormEdit;
