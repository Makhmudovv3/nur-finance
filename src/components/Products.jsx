import React from 'react';
import './Products.css';
import { PiCoinVerticalBold, PiWalletBold, PiChartBarBold, PiShieldCheckBold } from "react-icons/pi";
import Statik2 from "../assets/Statik2.png"
function Products() {
    return (
        <section className="Opp_Wrapper">
            <div className="Opp_Container">
                <h2 className="Opp_MainTitle">Ваши возможности с НурФинанс</h2>

                <div className="Opp_MainGrid">
                    <div className="Opp_Features">
                        <div className="Opp_FeatureItem">
                            <div className="Opp_IconBox"><PiCoinVerticalBold /></div>
                            <p>Накапливайте, принося пользу окружающим (обществу)</p>
                        </div>
                        <div className="Opp_FeatureItem">
                            <div className="Opp_IconBox"><PiWalletBold /></div>
                            <p>Зарабатывайте честно и справедливо</p>
                        </div>
                        <div className="Opp_FeatureItem">
                            <div className="Opp_IconBox"><PiChartBarBold /></div>
                            <p>Вкладывайте в реальные проверенные сделки</p>
                        </div>
                        <div className="Opp_FeatureItem">
                            <div className="Opp_IconBox"><PiShieldCheckBold /></div>
                            <p>Обеспечьте вложения надежными активами</p>
                        </div>
                        <button className="Opp_InvestBtn">Инвестиционные продукты</button>
                    </div>

                    <div className="Opp_StatsContent">

                        <div className="Opp_TopStats">
                            <div className="Opp_BarSection">
                                <p className="Opp_SectionTitle">Получайте повышенный доход от вложений</p>
                                <div className="Opp_BarChart">
                                    <div className="Opp_BarItem">
                                        <div className="Opp_BarLabel">до 8% <span>Годовых</span></div>
                                        <div className="Opp_BarShape gray_bar" style={{ height: '60px' }}></div>
                                        <p className="Opp_BarName">Банковские <br /> вклады</p>
                                    </div>
                                    <div className="Opp_BarItem active">
                                        <div className="Opp_BarLabel blue_text">до 19% <span>Годовых</span></div>
                                        <div className="Opp_BarShape blue_bar" style={{ height: '110px' }}></div>
                                        <p className="Opp_BarName blue_text">Вклады <br /> НурФинанс</p>
                                    </div>
                                    <div className="Opp_BarItem">
                                        <div className="Opp_BarLabel">до 9% <span>Годовых</span></div>
                                        <div className="Opp_BarShape gray_bar" style={{ height: '70px' }}></div>
                                        <p className="Opp_BarName">Вложения <br /> в недвижимость</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Opp_LineSection">
                                <p className="Opp_SectionTitle">Инвестируйте со стабильным результатом</p>
                                <div className="Opp_LineGraph">
                                    <img src={Statik2} alt="Graph" className="Opp_MainGraphImg" />

                                    <div className="Opp_GraphLegend">
                                        <span><i className="dot gray"></i> Фондовый рынок</span>
                                        <span><i className="dot blue"></i> Вклады НурФинанс</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Opp_Liquidity">
                            <p className="Opp_SectionTitle">Возвращайте свои средства вовремя</p>
                            <div className="Opp_LiqGrid">
                                <div className="Opp_LiqBox">
                                    <div className="Opp_LiqInfo"><b>Недвижимость</b> <span>низкая ликвидность</span></div>
                                    <p className="Opp_CheckText">✓ Срок возврата от 3 месяцев</p>
                                    <div className="Opp_ProgressBg"><div className="Opp_Progress gray_fill" style={{ width: '30%' }}></div></div>
                                </div>
                                <div className="Opp_LiqBox">
                                    <div className="Opp_LiqInfo"><b>НурФинанс</b> <span className="blue_text">высокая ликвидность</span></div>
                                    <p className="Opp_CheckText blue_text">✓ Срок возврата от 3 дней</p>
                                    <div className="Opp_ProgressBg"><div className="Opp_Progress blue_fill" style={{ width: '85%' }}></div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;