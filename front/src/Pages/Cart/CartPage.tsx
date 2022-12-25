import React, { FC } from 'react';
import { PageProps } from '../../components/AppRoutes/Routes';
import Title from '../../components/common/Title/Title';

const CartPage: FC<PageProps> = ({title}) => {
    return (
        <div>
            <Title title={title}/>
        </div>
    );
};

export default CartPage;