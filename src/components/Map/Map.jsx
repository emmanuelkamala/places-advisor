import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');
  const coordinates = { lat: -6.99, lng: 7.8 }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyCwO_eYddEl9kPUD-xPnksW9bJ5XhtJPL0'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
      Map
    </div>
  )
}

export default Map;
