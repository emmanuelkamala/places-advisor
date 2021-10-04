import React from 'react';
import {
  Box,
  Card,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Chip
} from '@material-ui/core';
import { LocationOn, Phone } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles()

  if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{ height: 350 }}
        image={ place.photo ? place.photo.images.large.url :
          'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/09/10/1133/Hyatt-Regency-Dar-es-Salaam-The-Kilimanjaro-P133-Level-8-Rooftop-Bar-Sunset.jpg/Hyatt-Regency-Dar-es-Salaam-The-Kilimanjaro-P133-Level-8-Rooftop-Bar-Sunset.4x3.jpg?imwidth=1280'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price Level</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {
          place?.awards?.map((award) => (
            <Box display="flex" justifyContent="space-between" alignItems="center" >
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))
        }

        {
          place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className={classes.chip} />
          ))
        }

        {
          place?.address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
              <LocationOn /> {place.address}
            </Typography>
          )
        }

        {
          place?.phone && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
              <Phone /> {place.phone}
            </Typography>
          )
        }

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')} >
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')} >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails;
