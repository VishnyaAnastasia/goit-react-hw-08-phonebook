import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selectors';
import { filterContacts } from 'redux/filter/filterSlice';
import { Box, Container, Grid, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch(selectFilter);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                variant="standard"
                onInput={event => {
                  dispatch(filterContacts(event.target.value));
                }}
                type="text"
                name="filter"
                placeholder="Find contacts by name"
                sx={{ mt: 5 }}
              ></TextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
