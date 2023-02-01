import { Outlet } from 'react-router-dom';

import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { FooterBar } from 'components/FooterBar/FooterBar';

export const Layout = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
};
