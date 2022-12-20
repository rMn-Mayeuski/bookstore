import React, { FC } from 'react';
import { PageProps } from '../../components/AppRoutes/Routes';

const AccountPage: FC<PageProps> = ({title}) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default AccountPage;