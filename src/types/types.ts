export type ParamList = {
    UsersList: {
        type: "friends" | "classmates" | "teachers";
    };
};

export interface ContentTypesI {
    checked: boolean
    title: string
    type: ContentType
}

export enum ContentType {
    News = "news",
    Mention = "mention",
}

export const ContentTypeView ={
    [ContentType.News]: "Новости",
    [ContentType.Mention]: "Упоминания"
}

export interface FiltersI {
    rolesType: Array<RolesI>
    people: Array<number>
}

export interface RolesI {
    selected: boolean
    title: string
    type: RoleType
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