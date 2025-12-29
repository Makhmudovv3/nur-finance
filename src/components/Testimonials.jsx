import "./Testimonials.css";
import azz from "../assets/azz.png";

let reviewsData = [
    {
        id: 1,
        name: "Евгений Садков",
        desc: "Программа – Экспресс Рассрочка",
        className: "bg_img1",
    },
    {
        id: 2,
        name: "Анастасия Майер",
        desc: "Инвестиции – Вклад Активный",
        className: "bg_img2",
    },
    {
        id: 3,
        name: "Фанзиль Гарипов",
        desc: "Программа – Авто Рассрочка",
        className: "bg_img3",
    },
];

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <h1 className="title">Отзывы клиентов</h1>

                <div className="reviews-wrapper">
                    <div className="arrow prev"></div>

                    <div className="reviews-list">
                        {reviewsData.map((item) => (
                            <div key={item.id} className="review-card">
                                <div className={`video-preview ${item.className}`}>
                                    <img src={azz} alt="play button" className="play-icon" />
                                </div>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="arrow next"></div>

                    <button className="view-more">Смотреть больше отзывов</button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;