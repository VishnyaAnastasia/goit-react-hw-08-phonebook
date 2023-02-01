import { Box, Container, Typography } from '@mui/material';

export const HomeInfo = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: 500,
          }}
        >
          PhoneBook
        </Typography>
      </Box>
    </Container>
  );
};
