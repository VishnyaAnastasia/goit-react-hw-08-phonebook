import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export const Nav = () => {
  const token = useSelector(selectToken);

  return (
    <>
      {!token && (
        <nav>
          <NavLink to="/">
            <IconButton
              edge="end"
              color="#ffffff"
              aria-label="logout"
              sx={{ mr: 2 }}
            >
              <HomeIcon sx={{ fontSize: 30, color: '#FFFFFF' }} />
            </IconButton>
          </NavLink>
        </nav>
      )}
    </>
  );
};
