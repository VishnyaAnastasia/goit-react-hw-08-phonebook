import { Typography, Link } from '@mui/material';

export const FooterBar = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mt={30}
      mb={10}
    >
      {'Created by '}
      <Link color="inherit" href="https://github.com/VishnyaAnastasia">
        Vishnya
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
