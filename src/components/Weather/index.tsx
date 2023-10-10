import React from "react";
import { Typography, Box, Paper, Container } from "@mui/material";
import { IGetWeatherResponse } from "../../store/types/weather";
import moment from "moment";
import AirIcon from "@mui/icons-material/Air";
import EggIcon from "@mui/icons-material/Egg";
import MyLocationIcon from "@mui/icons-material/MyLocation";

type Props = {
  weatherRecord: IGetWeatherResponse;
  regionName: string | undefined;
};

const Weather = ({ weatherRecord, regionName }: Props) => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h1"
        variant="h4"
        color="primary"
        gutterBottom
        pt={2}
      >
        Current Weather
      </Typography>
      <Paper
        sx={{
          p: 4,
          width: "400px",
          height: "350px",
          margin: "auto",
          mt: 5,
          borderRadius: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography component="h2" variant="h6">
            {regionName}
          </Typography>
          <Typography component="p">
            {moment(weatherRecord?.current_weather.time).format(
              "DD/MM/YYYY h:mm:ss a"
            )}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }} pt={4}>
          <Typography component="h2" variant="h2">
            {Math.round(weatherRecord.current_weather.temperature)}°C
          </Typography>
        </Box>

        <Box
          sx={{
            "& p": {
              display: "flex",
              alignItems: "center",
              gap: "10px",
            },
          }}
        >
          <Typography>
            <AirIcon />
            {weatherRecord.current_weather.windspeed} km/h
          </Typography>
          <Typography>
            <EggIcon />
            {weatherRecord.hourly.relativehumidity_2m[0]} %
          </Typography>
          <Typography>
            <MyLocationIcon />
            {weatherRecord.current_weather.winddirection}°
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Weather;
