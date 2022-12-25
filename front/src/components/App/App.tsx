import React, { FC } from 'react';
import AppRouter from '../AppRoutes/AppRoutes';
import Book from '../common/Book/Book';
import MainWrapper from '../common/MainWrapper/MainWrapper';

const App: FC = () => {
  
  return (
    <MainWrapper>
      <AppRouter/>
    </MainWrapper>
  );
};

export default App;