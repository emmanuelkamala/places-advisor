import React, {useState} from 'react';
import {
  CirculaProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';

import PlaceDetails from '../Place/PlaceDetails';

import useStyles from './styles';

function List() {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    {
      name: 'Cool places',
      name: 'Best Beer places',
      name: 'Best cook places'
    }
  ]
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels and Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={e => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={e => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {
          places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default List;
