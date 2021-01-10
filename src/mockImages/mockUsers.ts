import {Persons} from "../types/interfaces";

export const mockFriends = [
    {
        id: 2,
        avatar: require("./avatars/2.png"),
        name: "Неля Основа"
    },
    {
        id: 3,
        avatar: require("./avatars/3.png"),
        name: "Илья Николаев"
    },
    {
        id: 4,
        avatar: require("./avatars/8.png"),
        name: "Маргарита Синина"
    },
    {
        id: 5,
        avatar: require("./avatars/5.png"),
        name: "Иван Дон"
    },
    {
        id: 6,
        avatar: require("./avatars/6.png"),
        name: "Василий Гришин"
    },
    {
        id: 7,
        avatar: require("./avatars/10.png"),
        name: "Светлана Зинина"
    },
    {
        id: 8,
        avatar: require("./avatars/8.png"),
        name: "Дмитрий Крюков"
    },
    {
        id: 9,
        avatar: require("./avatars/7.png"),
        name: "Евгений Фролов"
    },
    {
        id: 10,
        avatar: require("./avatars/4.png"),
        name: "Никита Уваров"
    },
] as Array<Persons>

export const mockClassmates = [
    {
        id: 11,
        avatar: require("./avatars/5.png"),
        name: "Сергей Крылов"
    },
    {
        id: 12,
        avatar: require("./avatars/6.png"),
        name: "Кирилл Петров"
    },
    {
        id: 13,
        name: "Маргарита Синина"
    },
    {
        id: 14,
        avatar: require("./avatars/4.png"),
        name: "Денис Куприн"
    },
    {
        id: 15,
        avatar: require("./avatars/7.png"),
        name: "Гриша Рисов"
    },
    {
        id: 16,
        name: "Светлана Зинина"
    },
    {
        id: 17,
        avatar: require("./avatars/8.png"),
        name: "Дмитрий Крюков"
    },
    {
        id: 18,
        avatar: require("./avatars/11.png"),
        name: "Евгений Фролов"
    },
    {
        id: 19,
        avatar: require("./avatars/4.png"),
        name: "Никита Уваров"
    },
    {
        id: 20,
        avatar: require("./avatars/5.png"),
        name: "Иван Дон"
    },
    {
        id: 21,
        name: "Василий Гришин"
    },
    {
        id: 22,
        avatar: require("./avatars/10.png"),
        name: "Лена Глинкина"
    },
    {
        id: 23,
        avatar: require("./avatars/6.png"),
        name: "Андрей Волков"
    },
    {
        id: 24,
        avatar: require("./avatars/5.png"),
        name: "Денис Серкин"
    },
    {
        id: 25,
        name: "Игорь Зотин"
    },
] as Array<Persons>

export const mockTeachers = [
    {
        id: 26,
        name: "Николай Свиридов"
    },
    {
        id: 27,
        name: "Давид Ибрагимов"
    },
    {
        id: 28,
        avatar: require("./avatars/9.png"),
        name: "Зинаида Дурова"
    }
] as Array<Persons>

export const allPersons = [
    ...mockFriends,
    ...mockClassmates,
    ...mockTeachers,
]