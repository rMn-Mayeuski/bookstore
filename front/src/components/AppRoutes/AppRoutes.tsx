import React, { FC } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './Routes';

const AppRouter: FC = () => {

    const user = true

    return (
            <Routes>
                {!!user
                    ?
                    PRIVATE_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                    :
                    PUBLIC_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                }

                <Route path={"*"} element={<Navigate to={!!user ? "/home" : "/signin"} replace />} />
            </Routes>
    );
};

export default AppRouter;