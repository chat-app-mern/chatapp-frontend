import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';

const UserRootLayout:React.FC = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default UserRootLayout;
