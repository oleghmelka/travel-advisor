import { AllInboxOutlined } from "@material-ui/icons";
import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
            }
          })
        return data
    } catch (error) {
    console.log(error)
    }
}

export const getWeatherData = async (latitude, longitude) => {
  try {
    const { data } = await axios.get('https://vision-weather-map.p.rapidapi.com/Current-weather/', {
      params: { lat: latitude, lon: longitude },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'vision-weather-map.p.rapidapi.com'
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}