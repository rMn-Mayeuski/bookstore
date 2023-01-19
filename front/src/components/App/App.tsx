import React, { FC } from 'react';
import AppRouter from '../AppRoutes/AppRoutes';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";

const App: FC = () => {
  
  return (
    <MainWrapper>
      <AppRouter/>
    </MainWrapper>
  );
};

export default App;