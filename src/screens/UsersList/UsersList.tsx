import React from 'react';
import {Header, InWorkScreen} from "../../components";
import {useRoute} from "@react-navigation/native"

export const UsersList: React.FC = ({}) => {

    const {params} = useRoute()

    const title = params?.type === "friends"
        ? "Список друзей"
        : params?.type === "classmates"
            ? "Список одногруппников"
            : "Список преподавателей"

    return (
        <>
            <Header title={title} />
            <InWorkScreen/>
        </>
    )
};