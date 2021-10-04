import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const {data: { data }} = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // bl_latitude: '11.847676',
        // tr_latitude: '12.838442',
        // bl_longitude: '109.095887',
        // tr_longitude: '109.149359',
      },

      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '655b2eee08mshc0d3ddf1b186156p198a22jsn76407c2e3981'
      }
    });
    
    return data;
  } catch (error) {
    console.log(error);
  }
}