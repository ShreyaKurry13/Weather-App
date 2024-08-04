import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Mumbai');
    const [thisLocation, setLocation] = useState('');

// //   //fetch api
  const fetchWeather = async() =>{

    const options = {
        method: 'GET',
        url:'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            aggregateHours: '24',
            location: place,
            contentType: 'json',
            unitGroup: 'metric',
            shortColumnNames:0,
    },
    headers:{
        'X-RapidAPI-key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-host': 'visual-crossing-weather.p.rapidapi.com'
    }
  };

try {
    const response = await axios.request(options);
    console.log(response.data)
      if (response.data.locations) {
        console.log("Locations Data:", response.data.locations);
        const locationData = response.data.locations[Object.keys(response.data.locations)[0]];
        console.log(locationData);
        setLocation(locationData.address);
        setValues(locationData.values);
        setWeather(locationData.values[0]);
      } else {
        console.error("Locations data is missing in the response.");
        throw new Error('Location data not found or not in expected format.');
      }
} catch (e) {
    console.error(e);
    //if the API throws error
    alert('This place does not exist')
}
}
  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider value={{ weather, values, setPlace, thisLocation, place }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

