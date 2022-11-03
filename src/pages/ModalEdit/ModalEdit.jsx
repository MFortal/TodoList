import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { cardSelector } from "../../store/selectors";
import { updateCardAction } from "../../store/cardReducer";
import Tag from "../../components/Tag/Tag";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Multiselect from "../../components/Multiselect/Multiselect";
import stylesModal from "../../pages/Modal/Modal.module.css";

export const ModalEdit = () => {
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
      <div
        className={classNames(stylesModal.modal)}>
        <div className={classNames(stylesModal.modal_content)}>
          <button
            className={classNames(stylesModal.modal_close)}
            onClick={() => {
              navigate("/TodoList");
            }}
          />
          <h3 className={classNames(stylesModal.modal_header)}>
            Редактировать
          </h3>
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
              updateCard(values);
            }}>
            {(props) => (
              <Form className={classNames(stylesModal.modal_main)}>
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

                <div className={classNames(stylesModal.modal_tags)}>
                  {card.tags.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className={classNames(stylesModal.tags_tag)}>
                        <button
                          className={classNames(stylesModal.tags_delete)}
                        />
                        <Tag flagColor={tag} />
                      </div>
                    );
                  })}
                </div>

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

export default ModalEdit;
