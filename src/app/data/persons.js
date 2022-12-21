import React from "react";

import person01 from "../assets/images/persons/person01.png";
import person02 from "../assets/images/persons/person02.png";
import person03 from "../assets/images/persons/person03.png";
import person04 from "../assets/images/persons/person04.png";

const persons = [
    {
        name: "Мурадян Жанна Микаеловна",
        role: "директор клиники, врач стоматолог-терапевт, ортопед",
        photo: person01,
        description: (
            <>
                Закончила Тверской государственный медицинский университет по
                специальности врач-стоматолог общей практики. Через два года
                получила узкую специализацию – врач-стоматолог ортопед.
                <br />
                Постоянно обновляет и совершенствует свои навыки. В работе
                требовательна, профессиональная, аккуратна. Доктор отзывчивый и
                относится с заботой к каждому пациенту, с которыми всегда
                устанавливаются доверительные отношения.
                <br />
                «С пациентом мы в одной команде, поэтому оба должны приложить
                усилия для достижения наилучшего результата».
            </>
        )
    },
    {
        name: "Шуплецов Андрей Дмитриевич",
        role: "хирург-имплантолог",
        photo: person02,
        description:
            "Aliquid assumenda atque consequatur cum cumque debitis dolore dolorem ducimus enim, ex explicabo fugiat libero magnam molestiae nesciunt nisi numquam officia officiis omnis pariatur quisquam quos recusandae reprehenderit saepe sequi, sit tempora tempore ut veniam voluptas."
    },
    {
        name: "Мачульникова Анна Андреевна",
        role: "косметолог-эстетист, медицинская медсестра",
        photo: person03,
        description:
            "Consequatur dicta doloremque et ipsam quia tempore temporibus vero. Consequuntur deserunt dolorem est eum expedita ipsum omnis perferendis perspiciatis totam, voluptate. A adipisci assumenda at autem dicta eos eum eveniet illum labore nihil."
    },
    {
        name: "Щёголева Ксения Сергеевна",
        role: "ортодонт",
        photo: person04,
        description:
            "Maiores nobis sint sit ullam vero. Alias amet animi asperiores aspernatur delectus deleniti dicta dignissimos dolor eaque earum eos esse eum facere hic id inventore ipsam, iusto laboriosam laudantium libero magni maxime"
    }
];

export default persons;
