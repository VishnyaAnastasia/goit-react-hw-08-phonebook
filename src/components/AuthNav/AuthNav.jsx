import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Typography } from '@mui/material';

import styles from './AuthNav.module.css';

export const AuthNav = () => {
  const token = useSelector(selectToken);

  return (
    !token && (
      <ul className={styles.NavList}>
        <li>
          <NavLink className={styles.NavLink} to="register">
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
              Sign Up
            </Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.NavLink} to="login">
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
              Login
            </Typography>
          </NavLink>
        </li>
      </ul>
    )
  );
};
