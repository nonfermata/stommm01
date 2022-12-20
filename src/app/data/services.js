import img1 from "../assets/images/advantages/001.png";
import img2 from "../assets/images/advantages/002.png";
import img3 from "../assets/images/advantages/003.png";

const services = [
    {
        id: "stomatology",
        name: "Стоматология",
        icon: img1,
        list: [
            "протезирование",
            "лечение зубов",
            "удаление зубов",
            "имплантация",
            "ортодонтия (брекеты, пластинки)"
        ]
    },
    {
        id: "analysis",
        name: "Медицинские анализы",
        icon: img2,
        list: [
            "у нас широкий спектр медицинских анализов",
            "(около полутора тысяч видов исследований)"
        ]
    },
    {
        id: "cosmetology",
        name: "Косметология",
        icon: img3,
        list: [
            "массаж лица",
            "пилинги",
            "мезотерапия",
            "восковая эпиляция"
        ]
    }
];

export default services;
