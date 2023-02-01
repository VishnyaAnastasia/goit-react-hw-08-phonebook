import { Toolbar } from '@mui/material';

import { Nav } from 'components/Nav/Nav';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import styles from './HeaderBar.module.css';

export const HeaderBar = () => {
  return (
    <Toolbar className={styles.toolBarStyle}>
      <Nav />
      <UserAuthMenu />
      <AuthNav />
    </Toolbar>
  );
};
