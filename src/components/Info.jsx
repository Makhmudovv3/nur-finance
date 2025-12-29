import React from 'react';
import './Info.css';
import { PiCircleHalfLight } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";


function Info() {
    return (
        <div className="container">
            <h2 className="main-title">Полезная информация</h2>

            <div className="grid">

                <div className="card">
                    <div className="card-header">
                        <span className="category-label">Ответы</span>
                        <div className="icon-circle">?</div>
                    </div>
                    <h3 className="card-title">Часто задаваемые вопросы</h3>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Что такое инвестиции? Зачем нужно инвестировать?</a>
                    </div>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Какие стратегии инвестирования существуют и какую лучше выбрать?</a>
                    </div>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Как защищены мои инвестиции? Что будет, если компания обанкротится?</a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="category-label">Халяль</span>
                        <div className="icon-circle"><PiCircleHalfLight />
                        </div>
                    </div>
                    <h3 className="card-title">Отличие исламских инвестиций от неисламских</h3>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Термин «Риба» - что такое ростовщические операции?</a>
                    </div>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Как проверяют компании на соответствие нормам халяль?</a>
                    </div>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Термин «Сукук» - эквивалент исламских облигаций</a>
                    </div>
                </div>


                <div className="card">
                    <div className="card-header">
                        <span className="category-label">Полезное</span>
                        <div className="icon-circle"><FaGraduationCap />
                        </div>
                    </div>
                    <h3 className="card-title">Школа инвестора</h3>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">7 финансовых советов на 2021 год. Что делать, чтобы накопить на цель?</a>
                    </div>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Какие книги надо прочитать инвестору-новичку: топ-5 книг</a>
                    </div>
                    <div className="link-row">
                        <span className="arrow">›</span>
                        <a href="#">Сколько нужно денег, чтобы начать инвестировать</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Info;