export type ParamList = {
    UsersList: {
        type: "friends" | "classmates" | "teachers";
    };
};

export enum ContentType {
    News = "news",
    Mention = "mention",
}

export const ContentTypeView ={
    [ContentType.News]: "Новости",
    [ContentType.Mention]: "Упоминания"
}

export enum FiltersType {
    Friends = "friends",
    Classmates = "classmates",
    Teachers = "teachers",
    Universities = "university",
    Liked = "liked",
}

export const FilterTypeView = {
    [FiltersType.Friends]: "Друзья",
    [FiltersType.Classmates]: "Одногруппники",
    [FiltersType.Teachers]: "Преподаватели",
    [FiltersType.Universities]: "Университеты",
    [FiltersType.Liked]: "Понравившиеся",
}