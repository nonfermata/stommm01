const stomatologyPrices = [
    {
        cat_name: "ОБЩИЕ УСЛУГИ",
        _id: "1001",
        value: [
            {
                _id: "В04065001",
                code: "В04.065.001",
                name: "Приём (осмотр, консультация) врача стоматолога:",
                price: 500
            },
            {
                _id: "А0607012",
                code: "А06.07.012",
                name: "Визиография одного зуба (диагностический снимок) ",
                price: 300
            },
            {
                _id: "В01003004004",
                code: "В01.003.004.004",
                name: "Анестезия аппликационная",
                price: 350
            },
            {
                _id: "В01003004005",
                code: "В01.003.004.005",
                name: "Анестезия инфильтрационная, проводниковая с импортным анестетиком (Ubistesine, Ultracain, Septanest, Articaine)",
                price: 800
            }
        ]
    },
    {
        cat_name: "ТЕРАПИЯ",
        _id: "1002",
        value: [
            {
                _id: "A17.30.021",
                code: "A17.30.021",
                name: "Коагуляция мягких тканей (десны)",
                price: 500
            },
            {
                _id: "A16.07.002.009",
                code: "A16.07.002.009",
                name: "Наложение временной пломбы (Дентин-паста)",
                price: 500
            },
            {
                _id: "A16.07.002.009.001",
                code: "A16.07.002.009.001",
                name: "Временная пломба светового отверждения",
                price: 600
            },
            {
                _id: "А16.07.025.003",
                code: "А16.07.025.003",
                name: "Коррекция пломбы, поставленной в другой клинике",
                price: 500
            },
            {
                _id: "A16.07.092.001",
                code: "A16.07.092.001",
                name: "Раскрытие полости зуба",
                price: 600
            },
            {
                _id: "А16.07.002.005",
                code: "А16.07.002.005",
                name: "Восстановление зуба пломбой с использованием стеклоиномерных цементов",
                price: 2000
            },
            {
                _id: "A16.07.002.012",
                code: "A16.07.002.012",
                name: "Лечение кариеса среднее ( прием, анестезия, пломба, полировка)",
                price: 5500
            },
            {
                _id: "A16.07.002.013",
                code: "A16.07.002.013",
                name: "Лечение кариеса глубокое ( прием, анестезия, пломба, полировка, лечебная прокладка)",
                price: 6500
            },
            {
                _id: "А16.07.002.017",
                code: "А16.07.002.017",
                name: "Закрытие перфорации в зубе с использованием лечебной прокладки (Рутдент)",
                price: 1000
            },
            {
                _id: "А16.07.002.018",
                code: "А16.07.002.018",
                name: "Неинвазивная герметизация светоотверждаемым герметиком (1 зуб)",
                price: 2500
            },
            {
                _id: "А16.07.002.019",
                code: "А16.07.002.019",
                name: "Инвазивная герметизация светоотверждаемым герметиком (1 зуб)",
                price: 3500
            },
            {
                _id: "A16.07.003",
                code: "A16.07.003",
                name: "Восстановление зуба композитным виниром",
                price: 10000
            },
            {
                _id: "A11.07.027",
                code: "A11.07.027",
                name: "Наложение девитализирующей пасты (безмышьяковистой)",
                price: 1000
            },
            {
                _id: "А16.07.002.023",
                code: "А16.07.002.023",
                name: "Лечебная повязка с резорцин – формалиновой смесью",
                price: 700
            },
            {
                _id: "A16.07.030.004",
                code: "A16.07.030.004",
                name: "Инструментальная и медикаментозная обработка 1-го канала ручными + машинными инструментами",
                price: 1000
            },
            {
                _id: "А22.07.004.001",
                code: "А22.07.004.001",
                name: "Обработка 1-го канала ультразвуком (Эндо – чак)",
                price: 500
            },
            {
                _id: "А16.07.094.001",
                code: "А16.07.094.001",
                name: "Извлечение инородного тела из корневого канала",
                price: 1000
            },
            {
                _id: "A16.07.082.002",
                code: "A16.07.082.002",
                name: "Распломбировка 1-го канала (пасты типа резорцин-формалин, цемент)",
                price: 1000
            },
            {
                _id: "A16.07.030.003",
                code: "A16.07.030.003",
                name: "Временное пломбирование 1-го канала лечебной пастой (Calasept, Migrenol, Metapex), Пульпосептин",
                price: 600
            },
            {
                _id: "A16.07.030.004",
                code: "A16.07.030.004",
                name: "Пломбирование 1-го канала методом латеральной конденсации",
                price: 1500
            },
            {
                _id: "A16.07.031",
                code: "A16.07.031",
                name: "Восстановление зуба под коронку c использованием стекловолоконного штифта (Buildup)",
                price: 6000
            },
            {
                _id: "А16.07.019",
                code: "А16.07.019",
                name: "Шинирование (Ribbond), 1 соединение (СВШ)",
                price: 1500
            },
            {
                _id: "А16.07.051.001",
                code: "А16.07.051.001",
                name: "Комплексная профессиональная гигиена полости рта (УЗ, снятие налет AIR-FLOW, полировка зубов, фторирование гелем)",
                price: 5500
            },
            {
                _id: "А16.07.051.002",
                code: "А16.07.051.002",
                name: "Снятие зубных отложений в области 1 зуба + гигиеническая полировка",
                price: 500
            },
            {
                _id: "A11.07.010",
                code: "A11.07.010",
                name: "Медикаментозная обработка 1-го пародонтального кармана, пародонтальная повязка",
                price: 1000
            },
            {
                _id: "A16.07.025",
                code: "A16.07.025",
                name: "Избирательное пришлифовывание твердых тканей 1 зуба",
                price: 500
            },
            {
                _id: "A11.07.024",
                code: "A11.07.024",
                name: "Покрытие эмали зуба импортным фтор-лаком, десенситайзером",
                price: 500
            },
            {
                _id: "А23.07.001",
                code: "А23.07.001",
                name: "Использование системы изоляции коффердам",
                price: 1000
            },
            {
                _id: "А23.07.002",
                code: "А23.07.002",
                name: "Использование системы изоляции Optragate",
                price: 500
            },
            {
                _id: "A16.07.050",
                code: "A16.07.050",
                name: "Отбеливание по системе ZOOM 4. Акция «Приведи друга»",
                price: 14000
            },
            {
                _id: "A16.07.050",
                code: "A16.07.050",
                name: "Отбеливание по системе ZOOM 4",
                price: 18000
            },
            {
                _id: "А23.07.003",
                code: "А23.07.003",
                name: "Назубные украшения (скайс)",
                price: 1500
            }
        ]
    },
    {
        cat_name: "ХИРУРГИЯ",
        _id: "1003",
        value: [
            {
                _id: "A16.07.001.006",
                code: "A16.07.001.006",
                name: "Удаление подвижного зуба (пародонтит) (приём + анестезия + кюретаж лунки)",
                price: 2500
            },
            {
                _id: "А16.07.001.001",
                code: "А16.07.001.001",
                name: "Удаление молочного зуба по резорбции",
                price: 1000
            },
            {
                _id: "A16.07.001",
                code: "A16.07.001",
                name: "Удаление зуба, простое (приём + анестезия + кюретаж лунки)",
                price: 3500
            },
            {
                _id: "A16.07.001.002",
                code: "A16.07.001.002",
                name: "Удаление зуба, сложное (приём + анестезия + кюретаж лунки)",
                price: 6000
            },
            {
                _id: "A16.07.001.004",
                code: "A16.07.001.004",
                name: "Удаление зуба мудрости, простое (приём + анестезия + кюретаж лунки)",
                price: 5000
            },
            {
                _id: "A16.07.001.005",
                code: "A16.07.001.005",
                name: "Удаление зуба мудрости, средней степени сложности (приём + анестезия + кюретаж лунки)",
                price: 7500
            },
            {
                _id: "A16.07.001.003",
                code: "A16.07.001.003",
                name: "Удаление зуба мудрости, сложное (приём + анестезия + кюретаж лунки)",
                price: 12000
            },
            {
                _id: "A16.07.017.002",
                code: "A16.07.017.002",
                name: "Коррекция альвеолярного отростка по ортопедическим показаниям (приём + анестезия + наложение шва)",
                price: 4500
            },
            {
                _id: "A16.07.014",
                code: "A16.07.014",
                name: "Вскрытие пародонтального абсцесса (приём + анестезия + дренаж)",
                price: 3500
            },
            {
                _id: "A16.07.097",
                code: "A16.07.097",
                name: "Наложение швов (1 шов)",
                price: 700
            },
            {
                _id: "A16.07.097.001",
                code: "A16.07.097.001",
                name: "Снятие швов (1 шов), наложенных в другой клинике",
                price: 500
            },
            {
                _id: "A16.07.007",
                code: "A16.07.007",
                name: "Резекция верхушки корня (приём + анестезия + кюретаж лунки, коллапан, наложение шва)",
                price: 12000
            },
            {
                _id: "A16.07.013.001",
                code: "A16.07.013.001",
                name: "Лечение альвеолита с ревизией лунки",
                price: 500
            },
            {
                _id: "A16.07.039",
                code: "A16.07.039",
                name: "Закрытый кюретаж в области 3-х зубов (приём + анестезия + лечебная повязка)",
                price: 4000
            },
            {
                _id: "A16.07.040.001",
                code: "A16.07.040.001",
                name: "Удлинение клинической коронки одного зуба (приём + анестезия)",
                price: 3500
            },
            {
                _id: "A16.07.058",
                code: "A16.07.058",
                name: "Иссечение капюшона при перикоронарите (приём + анестезия)",
                price: 2500
            },
            {
                _id: "A15.07.002",
                code: "A15.07.002",
                name: "Применение альвожеля (1 единица)",
                price: 500
            },
            {
                _id: "A15.07.003",
                code: "A15.07.003",
                name: "Применение альвостаза (1 единица)",
                price: 500
            },
            {
                _id: "A15.07.004",
                code: "A15.07.004",
                name: "Применение неоконуса (1 единица)",
                price: 500
            },
            {
                _id: "A15.07.005",
                code: "A15.07.005",
                name: "Применение коллапана (1 единица)",
                price: 1500
            },
            {
                _id: "A16.07.001.006",
                code: "A16.07.001.006",
                name: "Удаление стенки зуба",
                price: 800
            },
            {
                _id: "A16.07.042",
                code: "A16.07.042",
                name: "Пластика уздечки верхней губы (приём + анестезия + наложение шва)",
                price: 7000
            },
            {
                _id: "A16.07.043",
                code: "A16.07.043",
                name: "Пластика уздечки нижней губы (приём + анестезия + наложение шва)",
                price: 7000
            },
            {
                _id: "A16.07.044",
                code: "A16.07.044",
                name: "Пластика уздечки языка (приём + анестезия + наложение шва)",
                price: 7000
            },
            {
                _id: "A16.07.045",
                code: "A16.07.045",
                name: "Пластика преддверия полости рта (приём + анестезия + наложение шва)",
                price: 15000
            },
            {
                _id: "A16.07.045.001",
                code: "A16.07.045.001",
                name: "Пластика рецессий микрохирургической техникой в области 1-3-х зубов (приём+анестезия+наложение шва)",
                price: 13500
            },
            {
                _id: "A16.01.004",
                code: "A16.01.004",
                name: "Антисептическая обработка ран (приём + лечебная повязка)",
                price: 1000
            }
        ]
    },
    {
        cat_name: "ОРТОПЕДИЯ",
        _id: "1004",
        value: [
            {
                _id: "1802",
                code: "null",
                name: "Несъёмные протезы",
                price: null
            },
            {
                _id: "A16.07.004",
                code: "A16.07.004",
                name: "Металлокерамическая коронка",
                price: 14000
            },
            {
                _id: "A16.07.006.009",
                code: "A16.07.006.009",
                name: "Металлокерамическая коронка на импланте",
                price: 27000
            },
            {
                _id: "A23.07.002.081",
                code: "A23.07.002.081",
                name: "Реставрация металлокерамической коронки",
                price: 6900
            },
            {
                _id: "A16.07.004.008",
                code: "A16.07.004.008",
                name: "Ретракция десны",
                price: 500
            },
            {
                _id: "A16.07.004.005",
                code: "A16.07.004.005",
                name: "Цельнолитая коронка",
                price: 6000
            },
            {
                _id: "A16.07.003.001",
                code: "A16.07.003.001",
                name: "Керамическая вкладка",
                price: 15000
            },
            {
                _id: "A16.07.003.002",
                code: "A16.07.003.002",
                name: "Керамический винир",
                price: 25000
            },
            {
                _id: "A16.07.004.006",
                code: "A16.07.004.006",
                name: "Цельнокерамическая коронка (пресс керамика) E-MAX",
                price: 22000
            },
            {
                _id: "A16.07.004.007",
                code: "A16.07.004.007",
                name: "Цельнокерамическая коронка (циркониевый каркас)",
                price: 25000
            },
            {
                _id: "A16.07.049",
                code: "A16.07.049",
                name: "Цементировка металлокерамической коронки",
                price: 1000
            },
            {
                _id: "A16.07.049.001",
                code: "A16.07.049.001",
                name: "Временная фиксация",
                price: 500
            },
            {
                _id: "A16.07.049.002",
                code: "A16.07.049.002",
                name: "Цементировка винира / вкладки Е-МАХ",
                price: 2500
            },
            {
                _id: "A16.07.053.002",
                code: "A16.07.053.002",
                name: "Снятие штампованной коронки",
                price: 500
            },
            {
                _id: "A16.07.053.001",
                code: "A16.07.053.001",
                name: "Снятие металлокерамической коронки",
                price: 1000
            },
            {
                _id: "A16.07.004.010",
                code: "A16.07.004.010",
                name: "Коронка пластмассовая",
                price: 3000
            },
            {_id: "1803", code: "null", name: "Съёмные протезы", price: null},
            {
                _id: "A16.07.085.002",
                code: "A16.07.085.002",
                name: "Частичный съёмный протез Акри-фри",
                price: 35000
            },
            {
                _id: "A16.07.035",
                code: "A16.07.035",
                name: "Частичный пластиночный съёмный протез",
                price: 20000
            },
            {
                _id: "A16.07.023",
                code: "A16.07.023",
                name: "Полный пластиночный съёмный протез",
                price: 25000
            },
            {
                _id: "A16.07.023.001",
                code: "A16.07.023.001",
                name: "Полный съёмный протез Акри-фри",
                price: 36000
            },
            {
                _id: "A16.07.035.003",
                code: "A16.07.035.003",
                name: "Косметическая бабочка",
                price: 16000
            },
            {
                _id: "A22.07.011",
                code: "A22.07.011",
                name: "Чистка съёмного протеза ультразвуком (нейлон, полиамид)",
                price: 5000
            },
            {
                _id: "A16.07.036.001",
                code: "A16.07.036.001",
                name: "Бюгельный протез на верхнюю / нижнюю челюсти (ацеталовый)",
                price: 40000
            },
            {_id: "1804", code: "null", name: "Прочие работы", price: null},
            {
                _id: "A16.07.033",
                code: "A16.07.033",
                name: "Культевая штифтовая вкладка (пост-анкер)",
                price: 6000
            },
            {
                _id: "А23.07.002.050",
                code: "А23.07.002.050",
                name: "Акриловый съемный протез с кнопочной фиксацией на 2-х имплантатах",
                price: 55000
            },
            {
                _id: "A23.07.002",
                code: "A23.07.002",
                name: "Коррекция протезов, изготовленных в другом медицинском учреждении",
                price: 3000
            },
            {
                _id: "A23.07.002.001",
                code: "A23.07.002.001",
                name: "Изготовление диагностических моделей (пара)",
                price: 1000
            },
            {
                _id: "A02.07.010.002",
                code: "A02.07.010.002",
                name: "Оттиск из импортного материала для металлокерамических коронок (двухслойный)",
                price: 1400
            },
            {
                _id: "A02.07.010.001",
                code: "A02.07.010.001",
                name: "Снятие альгинатного оттиска",
                price: 800
            },
            {
                _id: "1805",
                code: "null",
                name: "Починка протезов",
                price: null
            },
            {
                _id: "A23.07.002.075",
                code: "A23.07.002.075",
                name: "Замена или постановка в съёмном протезе одного дополнительного зуба из пластмассы",
                price: 4000
            },
            {
                _id: "A23.07.002.076",
                code: "A23.07.002.076",
                name: "Замена или постановка в съёмном протезе двух дополнительных зубов из пластмассы",
                price: 5000
            },
            {
                _id: "A23.07.002.077",
                code: "A23.07.002.077",
                name: "Замена или постановка в съёмном протезе трёх дополнительных зубов из пластмассы",
                price: 6000
            },
            {
                _id: "A23.07.002.035",
                code: "A23.07.002.035",
                name: "Приварка кламера",
                price: 4000
            },
            {
                _id: "A23.07.002.078",
                code: "A23.07.002.078",
                name: "Починка перелома протеза",
                price: 4000
            },
            {
                _id: "A23.07.002.079",
                code: "A23.07.002.079",
                name: "Изготовление индивидуальной ложки",
                price: 2500
            },
            {
                _id: "A23.07.002.034",
                code: "A23.07.002.034",
                name: "Перебазировка протеза",
                price: 7000
            }
        ]
    },
    {
        cat_name: "ИМПЛАНТОЛОГИЯ",
        _id: "1005",
        value: [
            {
                _id: "В04.067.002",
                code: "В04.067.002",
                name: "Консультация хирурга-стоматолога с чтением КТ-снимка и составлением плана лечения",
                price: 1500
            },
            {
                _id: "A16.07.017.002",
                code: "A16.07.017.002",
                name: "Расщепление альвеолярного гребня",
                price: 20000
            },
            {
                _id: "A16.30.030.002",
                code: "A16.30.030.002",
                name: "Пересадка костного аутотрансплантата в области 1 зуба",
                price: 18000
            },
            {
                _id: "A16.30.030.003",
                code: "A16.30.030.003",
                name: "Пересадка костного аутотрансплантата в области 2-3-х соседних зубов",
                price: 25000
            },
            {
                _id: "A16.07.055",
                code: "A16.07.055",
                name: "Закрытый синус-лифтинг",
                price: 26000
            },
            {
                _id: "A16.07.055.001",
                code: "A16.07.055.001",
                name: "Открытый синус-лифтинг",
                price: 36000
            },
            {
                _id: "A16.07.055.002",
                code: "A16.07.055.002",
                name: "Синус-лифтинг одномоментный с имплантацией",
                price: 41000
            },
            {
                _id: "0000000000000",
                code: "0000000000000",
                name: " Навигационный шаблон для имплантации",
                price: 1000
            },
            {
                _id: "A16.07.054",
                code: "A16.07.054",
                name: "Установка одного имплантата OSSTEM",
                price: 30000
            },
            {
                _id: "A16.07.054.001",
                code: "A16.07.054.001",
                name: "Установка формирователя десны",
                price: 6000
            },
            {
                _id: "A16.07.054.002",
                code: "A16.07.054.002",
                name: "Установка ортодонтического минивинта (приём+анестезия)",
                price: 15000
            },
            {
                _id: "A16.07.054.003",
                code: "A16.07.054.003",
                name: "Резорбируемая мембрана «Bio-Gide»(размер 16*22 мм)",
                price: 21000
            },
            {
                _id: "A16.07.041.003",
                code: "A16.07.041.003",
                name: "Применение костнозамещающего материала Bio-Oss Spongiosa (0,5 грамм) (или аналог)",
                price:
                    15000
            },
            {
                _id: "A16.07.055.003",
                code: "A16.07.055.003",
                name: "Применение пинов для фиксации мембран",
                price: 6500
            }
        ]
    },
    {
        cat_name: "ОРТОДОНТИЯ",
        _id: "1006",
        value: [
            {_id: "1806", code: "null", name: "Оттиски", price: null},
            {
                _id: "A02.07.010.003",
                code: "A02.07.010.003",
                name: "Снятие оттиска из А-силикона и изготовление модели из супергипса (1 челюсть)",
                price: 1500
            },
            {_id: "1807", code: "null", name: "Пластинки", price: null},
            {
                _id: "A16.07.047.006",
                code: "A16.07.047.006",
                name: "Изготовление и фиксация расширяющей пластинки",
                price: 17000
            },
            {
                _id: "A16.07.047.007",
                code: "A16.07.047.007",
                name: "Коррекция пластинки",
                price: 900
            },
            {
                _id: "A23.07.002.080",
                code: "A23.07.002.080",
                name: "Починка пластинки",
                price: 5600
            },
            {
                _id: "1808",
                code: "null",
                name: "Лечение на съемной аппаратуре",
                price: null
            },
            {
                _id: "A16.07.047.001",
                code: "A16.07.047.001",
                name: "Аппарат: LM-активатор, Myobrace, трейнер (цена за аппарат)",
                price: 8000
            },
            {
                _id: "A16.07.047.002",
                code: "A16.07.047.002",
                name: "Сдача трейнеров, LM-активатора, Myobrace (без цены аппарата)",
                price: 4000
            },
            {
                _id: "A16.07.047.003",
                code: "A16.07.047.003",
                name: "Сдача съемного аппарата Twin-Block (цена под ключ)",
                price: 30000
            },
            {
                _id: "A16.07.047.004",
                code: "A16.07.047.004",
                name: "Каппы: ретенц (цена под ключ)",
                price: 8000
            },
            {
                _id: "A16.07.047.005",
                code: "A16.07.047.005",
                name: "Пластина расширенная с Винтом Бертони",
                price: 19000
            },
            {_id: "1809", code: "null", name: "Брекеты", price: null},
            {
                _id: "A16.07.048.001",
                code: "A16.07.048.001",
                name: "Металлическая брекет-система (стоимость аппаратуры на 2 челюсти)",
                price: 36000
            },
            {
                _id: "A16.07.048.002",
                code: "A16.07.048.002",
                name: "Керамическая брекет-система (стоимость аппаратуры на 2 челюсти)",
                price: 58000
            },
            {
                _id: "A16.07.048.004",
                code: "A16.07.048.004",
                name: "Фиксация брекет-системы металлической (1 челюсть)",
                price: 19000
            },
            {
                _id: "A16.07.048.006",
                code: "A16.07.048.006",
                name: "Фиксация керамической брекет-системы (1 челюсть)",
                price: 21000
            },
            {
                _id: "A16.07.048.009",
                code: "A16.07.048.009",
                name: "Плановая коррекция металлической брекет-системы (1 челюсть)",
                price: 2800
            },
            {
                _id: "A16.07.048.010",
                code: "A16.07.048.010",
                name: "Плановая коррекция безлигатурной брекет-системы (1 челюсть)",
                price: 3000
            },
            {
                _id: "A16.07.048.011",
                code: "A16.07.048.011",
                name: "Плановая коррекция керамической брекет-системы (1 челюсть)",
                price: 2800
            },
            {
                _id: "A16.07.048.013",
                code: "A16.07.048.013",
                name: "Снятие брекетов (1 челюсть)",
                price: 20000
            },
            {
                _id: "А16.07.051.003",
                code: "А16.07.051.003",
                name: "Профессиональная гигиена 1 зубного ряда до/после снятия брекетов + удаление клея",
                price: 4000
            },
            {
                _id: "A16.07.048.015",
                code: "A16.07.048.015",
                name: "Фиксация металлического брекета (1 зуб)",
                price: 1100
            },
            {
                _id: "A16.07.048.016",
                code: "A16.07.048.016",
                name: "Фиксация керамического брекета (1 зуб)",
                price: 1300
            },
            {
                _id: "A16.07.048.018",
                code: "A16.07.048.018",
                name: "Фиксация 1 кнопки, крючков",
                price: 700
            },
            {
                _id: "A16.07.048.019",
                code: "A16.07.048.019",
                name: "Фиксация 1 подвижного крючка, стопора",
                price: 400
            },
            {
                _id: "A16.07.048.020",
                code: "A16.07.048.020",
                name: "Фиксация 1 специального элемента",
                price: 1300
            },
            {
                _id: "A16.07.048.022",
                code: "A16.07.048.022",
                name: "Связывание зубного ряда металлической лигатурой (1 зуб)",
                price: 120
            },
            {
                _id: "A16.07.048.023",
                code: "A16.07.048.023",
                name: "Фиксация эластичной тяги (1 звено)",
                price: 120
            },
            {
                _id: "A16.07.053.001",
                code: "A16.07.053.001",
                name: "Фиксация ортодонтического кольца",
                price: 800
            },
            {
                _id: "А16.07.002.019",
                code: "А16.07.002.019",
                name: "Накладка на 1 зуб цемента/композита",
                price: 400
            },
            {
                _id: "A16.07.048.030",
                code: "A16.07.048.030",
                name: "Активация аппарата",
                price: 900
            },
            {
                _id: "А16.07.046.001",
                code: "А16.07.046.001",
                name: "Изготовление и установка ретейнера/каппы",
                price: 8500
            }
        ]
    }
];

export default stomatologyPrices;

