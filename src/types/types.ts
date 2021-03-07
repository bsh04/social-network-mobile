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

export enum RoleType {
    Friends = "friends",
    Classmates = "classmates",
    Teachers = "teachers",
    Universities = "university",
    Liked = "liked",
}

export const RoleTypeView = {
    [RoleType.Friends]: "Друзья",
    [RoleType.Classmates]: "Одногруппники",
    [RoleType.Teachers]: "Преподаватели",
    [RoleType.Universities]: "Университеты",
    [RoleType.Liked]: "Понравившиеся",
}

export enum FORM {
    login = "Login",
    registration = "registration",
    resetPassword = "resetPassword",
    filters = "filters"
}
