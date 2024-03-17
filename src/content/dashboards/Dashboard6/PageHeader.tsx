import { Typography, Button, Grid, TextField } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'Luba Ristic',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <TextField
          id="outlined-search"
          label="Location"
          type="search"
          
        />
        <TextField
          id="outlined-search"
          label="Event"
          type="search"
        />
        <TextField
          id="outlined-search"
          label="No Competitors"
          type="search"
        />
        <TextField
          id="outlined-search"
          type="date"
        />
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
        >
          Send request
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
