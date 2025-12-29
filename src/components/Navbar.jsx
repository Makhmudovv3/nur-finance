import "./Navbar.css";
import { MdCall } from "react-icons/md";
import Logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5"; 
import Slide2 from "../assets/Slide2.png";
import Man from "../assets/Man.png";

function Navbar() {
    return (
        <div className="Section">
            <nav className="Top_Navbar">
                <div className="Container">
                    <div className="Classlist">
                        <a href="#">Инвестиционно-финансовая компания</a>
                        <a href="#">Город Казань</a>
                        <a href="#">О компании</a>
                        <a href="#">Отзывы</a>
                        <a href="#">Халяль подробно</a>
                        <a href="#">Отчетность</a>
                        <a href="#">Наши партнеры</a>
                        <a href="#">Сотрудничество</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="nav_text">
                        <p>RU</p>
                    </div>
                </div>
                <div className="border"></div>
            </nav>

            <div className="border_line"></div>

            <section className="Main_Navbar">
                <div className="Container nav_flex">
                    <div className="nav_left">
                        <img src={Logo} alt="Logo" className="logo_img" />
                        <div className="nav_links">
                            <a href="#">Инвестиции</a>
                            <a href="#">Рассрочка</a>
                            <a href="#">Калькулятор</a>
                        </div>
                    </div>

                    <div className="nav_right">
                        <p className="phone_number">
                            <MdCall className="icon" /> 8 800 2700 700
                        </p>
                        <CiSearch className="icon_search" />
                        <button className="btn_cabinet">Личный Кабинет</button>
                        <IoMenu className="burger_icon" /> 
                    </div>
                </div>
            </section>

            <section className="Hero">
                <div className="BG2"></div>
                <div className="BG"></div>
                <div className="Container Hero_container">
                    <div className="Hero1_text">
                        <h1>
                            Инвестируйте с повышенной <br />
                            доходностью до <span>19%</span> годовых
                        </h1>
                        <p className="hero_desc">
                            100% обеспеченность активами, прибыль каждые 3 месяца!
                        </p>
                        <div className="hero_button_group">
                            <button className="btn1">Инвестировать</button>
                            <button className="btn2">Подробнее</button>
                            <img src={Slide2} alt="slider" className="slider_dots" />
                        </div>
                    </div>
                    <div className="Hero_img">
                        <img src={Man} alt="Man" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Navbar;