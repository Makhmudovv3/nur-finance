import React from 'react';
import './Section.css';
import Man1 from "../assets/Man1.png"; 
import Car from "../assets/Car.png";
import Washer from "../assets/Washer.png";
import Man2 from "../assets/Man2.png";

function Section() {
    return (
        <div className="Cards_Section">
            <div className="Container">
                <h2 className="Main_Title">Рекомендуемые продукты</h2>

                <div className="Grid">

                    <div className="Card">
                        <div className="Card_Left">
                            <span>Инвестиции</span>
                            <h3>Вклад Комфорт</h3>
                            <div className="Stats">
                                <h1>17,5%</h1>
                                <h1>90 дней</h1>
                            </div>
                            <p>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
                            <div className="Buttons">
                                <button className="Blue_Btn">Инвестировать</button>
                                <button className="White_Btn">Подробнее</button>
                            </div>
                        </div>
                        <img src={Man1} alt="" className="Card_Img" />
                    </div>

                    {/* 2-Kartochka */}
                    <div className="Card">
                        <div className="Card_Left">
                            <span>Финансирование</span>
                            <h3>Авто Рассрочка</h3>
                            <div className="Stats">
                                <h1>5 млн</h1>
                                <h1>3 лет</h1>
                            </div>
                            <p>Отсутствие обязательности страхования КАСКО. Первоначальный взнос от 10%</p>
                            <div className="Buttons">
                                <button className="Blue_Btn">Оформить</button>
                                <button className="White_Btn">Подробнее</button>
                            </div>
                        </div>
                        <img src={Car} alt="" className="Card_Img" />
                    </div>

                    <div className="Card">
                        <div className="Card_Left">
                            <span>Финансирование</span>
                            <h3>Экспресс Рассрочка</h3>
                            <div className="Stats">
                                <h1>1 млн</h1>
                                <h1>3 лет</h1>
                            </div>
                            <p>Финансирование физическим лицам для приобретения необходимых товаров</p>
                            <div className="Buttons">
                                <button className="Blue_Btn">Оформить</button>
                                <button className="White_Btn">Подробнее</button>
                            </div>
                        </div>
                        <img src={Washer} alt="" className="Card_Img" />
                    </div>

                    <div className="Card">
                        <div className="Card_Left">
                            <span>Инвестиции</span>
                            <h3>Вклад Активный</h3>
                            <div className="Stats">
                                <h1>16,5%</h1>
                                <h1>90 дней</h1>
                            </div>
                            <p>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
                            <div className="Buttons">
                                <button className="Blue_Btn">Инвестировать</button>
                                <button className="White_Btn">Подробнее</button>
                            </div>
                        </div>
                        <img src={Man2} alt="" className="Card_Img" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Section;