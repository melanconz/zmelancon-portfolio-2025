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
import { Link } from 'react-router-dom';
import './WeatherDashboard.css';

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
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(
        `${apiUrl}/api/weather?city=${encodeURIComponent(city)}`
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
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #e3f2fd, #ffffff)',
        minHeight: '100vh',
        py: 5,
        px: 2,
      }}>
      <Box sx={{ textAlign: 'left', mb: 2 }}>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: blue[700], fontWeight: 600 }}>
          ← Back to Homepage
        </Link>
      </Box>

      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: blue[700],
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
          Weather Dashboard
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 4,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <TextField
            label="Enter City"
            variant="outlined"
            value={city}
            onChange={handleCityChange}
            sx={{
              minWidth: 250,
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
          <Button
            variant="contained"
            onClick={fetchWeather}
            sx={{
              bgcolor: blue[500],
              px: 3,
              fontWeight: 'bold',
              borderRadius: 2,
              '&:hover': {
                bgcolor: blue[700],
              },
            }}>
            Get Weather
          </Button>
        </Box>

        {loading && <CircularProgress sx={{ color: blue[500] }} />}
        {error && (
          <Typography color="error" sx={{ mt: 2, fontWeight: 'bold' }}>
            {error}
          </Typography>
        )}

        {weatherData && !loading && (
          <Card
            sx={{
              maxWidth: 400,
              margin: '0 auto',
              backgroundColor: grey[100],
              borderRadius: 4,
              boxShadow: 4,
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
                style={{ width: 60, height: 60, marginBottom: 8 }}
              />
              <Typography variant="body1" sx={{ color: grey[700], mb: 1 }}>
                {weatherData.current.condition.text}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {weatherData.current.temp_c}°C
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Humidity: {weatherData.current.humidity}%
              </Typography>
              <Typography variant="body2">
                Wind: {weatherData.current.wind_kph} km/h
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
};

export default WeatherDashboard;
