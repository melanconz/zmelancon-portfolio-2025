import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Box,
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    humidity: number;
    wind_kph: number;
  };
}

const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${city}`
      );
      const data = await response.json();

      if (data.error) {
        setError('City not found');
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 5 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: blue[700],
          textTransform: 'uppercase',
        }}>
        Weather Dashboard
      </Typography>

      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={handleCityChange}
        fullWidth
        sx={{
          mb: 2,
          borderRadius: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': {
              borderColor: blue[500],
            },
            '&:hover fieldset': {
              borderColor: blue[700],
            },
          },
        }}
      />
      <Button
        variant="contained"
        onClick={fetchWeather}
        sx={{
          mb: 4,
          bgcolor: blue[500],
          '&:hover': {
            bgcolor: blue[700],
          },
        }}>
        Get Weather
      </Button>

      {loading && <CircularProgress sx={{ color: blue[500] }} />}
      {error && (
        <Typography color="error" sx={{ mt: 2, fontWeight: 'bold' }}>
          {error}
        </Typography>
      )}

      {weatherData && !loading && (
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Card
            sx={{
              width: '100%',
              maxWidth: 400,
              backgroundColor: grey[100],
              borderRadius: 3,
              boxShadow: 3,
              padding: 3,
              textAlign: 'center',
            }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {weatherData.location.name}
              </Typography>
              <img
                src={`https://${weatherData.current.condition.icon}`}
                alt={weatherData.current.condition.text}
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
              <Typography variant="body1" sx={{ color: grey[700] }}>
                {weatherData.current.condition.text}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2 }}>
                {weatherData.current.temp_c}°C
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Humidity: {weatherData.current.humidity}%
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Wind: {weatherData.current.wind_kph} km/h
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default WeatherDashboard;
