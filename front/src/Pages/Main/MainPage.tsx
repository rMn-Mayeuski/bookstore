import React, { FC } from 'react';
import { PageProps } from '../../components/AppRoutes/Routes';

const MainPage: FC<PageProps> = ({title}) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default MainPage;