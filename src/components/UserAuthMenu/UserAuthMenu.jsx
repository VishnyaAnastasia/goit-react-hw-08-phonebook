import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

import { selectName } from 'redux/auth/auth-selectors';

import { selectToken } from 'redux/auth/auth-selectors';
import { IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  const name = useSelector(selectName);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
    dispatch(logout());
  };

  return (
    token && (
      <>
        <Typography
          variant="overline"
          gutterBottom
          component="div"
          sx={{ flexGrow: 2 }}
        >
          {`Hi, ${name}!`}
        </Typography>
        <IconButton
          edge="end"
          color="#ffffff"
          aria-label="logout"
          sx={{ mr: 2 }}
          onClick={clickHandler}
        >
          <LogoutIcon sx={{ fontSize: 30, color: '#FFFFFF' }} />
        </IconButton>
      </>
    )
  );
};
