import React from 'react';
import './Footer.css';
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <img src={Logo} alt="Нур Финанс" className="footer-logo" />
                </div>
                <div className="footer-search">
                    <div className="search-container">
                        <span className="search-icon"><CiSearch />
                        </span>
                        <input type="text" placeholder="Поиск по услугам" />
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-contacts">
                    <h2 className="phone">8 800 2700 700</h2>
                    <p className="email">support@nur.finance</p>
                    <p className="address">Казань, ул. Мавлютова, дом 31</p>
                    <p className="work-hours">Мы работаем с 08:00 до 20:00</p>
                    <div className="social-icons">
                        <div className="icon"><CiFacebook />
                        </div>
                        <div className="icon"><FaWhatsapp />
                        </div>
                        <div className="icon"><FaTelegram />
                        </div>
                        <div className="icon"><FaYoutube />
                        </div>
                        <div className="icon"><FaInstagram />
                        </div>
                    </div>
                </div>

                <div className="footer-links-grid">
                    <div className="link-group">
                        <h3>Инвестиции</h3>
                        <ul>
                            <li>Вклад Накопительный</li>
                            <li>Вклад Активный</li>
                            <li>Вклад Комфорт</li>
                            <li>Калькулятор</li>
                            <li>Отзывы по инвестициям</li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h3>Рассрочка</h3>
                        <ul>
                            <li>АвтоРассрочка</li>
                            <li>Долевое финансирование</li>
                            <li>Долговое финансирование</li>
                            <li>Калькулятор</li>
                            <li>Отзывы по займам</li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h3>Компания</h3>
                        <ul>
                            <li>О компании</li>
                            <li>Новости</li>
                            <li>Отчетность</li>
                            <li>Сотрудничество</li>
                            <li>Реквизиты</li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h3>Информация</h3>
                        <ul>
                            <li>Халяль подробно</li>
                            <li>Наши партнеры</li>
                            <li>Частые вопросы</li>
                            <li>Личный кабинет</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <h4>Заголовок о доп моментах</h4>
                <p className="disclaimer">
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. 
                </p>
                <div className="copyright-row">
                    <span>© 2021 АО «НурФинанс»</span>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;