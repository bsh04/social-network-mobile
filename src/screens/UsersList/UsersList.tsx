import React from 'react';
import {Header, InWorkScreen} from "../../components";

export const UsersList: React.FC = () => {
    return (
        <>
            <Header title={'Список друзей'} isGoBack={false}/>
            <InWorkScreen/>
        </>
    )
};