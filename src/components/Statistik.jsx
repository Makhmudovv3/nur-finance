import React from 'react';
import "./Statistik.css";
import { PiCaretDoubleRightDuotone, PiTargetBold } from "react-icons/pi";
import StaticImg from "../assets/Statistik.png";

function Statistik() {
    return (
        <div className="Statistik_Component">
            {/* Yuqori ko'k bloklar */}
            <section className="section1">
                <div className="containerr">
                    <PiCaretDoubleRightDuotone className="icon1" />
                    <p>Опыт команды в сфере <br />
                        партнерских финансов <br />
                        более 10 лет.
                    </p>
                </div>
                <div className="containerr2">
                    <PiTargetBold className="icon1" />
                    <p>Соответствие деятельности <br />
                        компании высоким этическим <br />
                        и правовым стандартам</p>
                </div>
            </section>

            {/* Pastki kulrang fonli rasm bloki */}
            <section className="static">
                <div className="static_img">
                    <img src={StaticImg} alt="Statistics" />
                </div>
            </section>
        </div>
    );
}

export default Statistik;