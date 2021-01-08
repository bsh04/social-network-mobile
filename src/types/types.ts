export type ParamList = {
    UsersList: {
        type: "friends" | "classmates" | "teachers";
    };
};

export enum ContentType {
    News = "news",
    Mention = "mention",
}

export enum FiltersType {
    Friends = "friends",
    Classmates = "classmates",
    Teachers = "teachers",
    University = "university",
    Liked = "liked",
}