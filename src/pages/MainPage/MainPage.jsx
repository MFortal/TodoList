import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import {
  filterSelector,
  cardSelector,
  boardsSelector,
} from "../../store/selectors";
import Filter from "../../components/Filter/Filter";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const filters = useSelector(filterSelector);
  const boards = useSelector(boardsSelector);
  let cards = useSelector(cardSelector);

  // Фильтрация
  for (let i = 0; i < filters.length; i++) {
    if (filters[i].checked) {
      cards = cards.filter((card) => card[filters[i].flag] !== undefined);
    }
  }

  const checkboxes = filters.map((filter, index) => {
    return (
      <React.Fragment key={index}>
        <Filter
          id={filter.id}
          value={filter.value}
          flag={filter.flag}
          checked={filter.checked}
        />
      </React.Fragment>
    );
  });

  return (
    <>
      <div className={classNames(styles.container)}>
        <section className={classNames(styles.filters)}>{checkboxes}</section>
        <section className={classNames(styles.cards)}>
          {boards.map((board) => {
            return (
              <article className={classNames(styles.list)} key={board.id}>
                <div className={classNames(styles.header)}>
                  <h3 className={classNames(styles.header_title)}>
                    {board.headerText}
                  </h3>
                  <span className={classNames(styles.header_countTasks)}>
                    {cards.filter((card) => card.boardId === board.id).length}{" "}
                    tasks
                  </span>
                </div>
                <div className={classNames(styles.main)}>
                  <div className={classNames(styles.main_cards)}>
                    {cards
                      .filter((card) => card.boardId === board.id)
                      .map((card) => {
                        return (
                          <div key={card.id} draggable={true} className="item">
                            <Card id={card.id} idBoard={board.id} />
                          </div>
                        );
                      })}
                  </div>
                  {board.btn && (
                    <Button
                      value={board.btn.value}
                      flagPlus={board.btn.flagPlus}
                      boardId={board.id}
                    />
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;
