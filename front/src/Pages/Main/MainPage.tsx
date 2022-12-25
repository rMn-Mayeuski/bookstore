import React, { FC } from 'react';
import { PageProps } from '../../components/AppRoutes/Routes';
import Subscription from '../../components/common/Subscription/Subscription';
import Title from '../../components/common/Title/Title';

const MainPage: FC<PageProps> = ({title}) => {
    return (
        <>
            <Title title={title}/>
            <Subscription/>
        </>
    );
};

export default MainPage;