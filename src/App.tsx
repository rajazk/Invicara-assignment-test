import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useGetWeatherQuery } from "./store/api/weathersApi";
import { useGetIpLocationQuery } from "./store/api/ipLocationApi";
import { useLazyGetStockPricesQuery } from "./store/api/stocksApi";
import { useGetNewPostsQuery } from "./store/api/newsPostApi";
import { useAppSelector, useAppDispatch } from "./store";
import { selectLocations } from "./store/slice/ipLocation";
import { setStockPriceData } from "./store/slice/stockPrice";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "./components/Header";
import Weather from "./components/Weather";
import Stock from "./components/Stock";
import NewsPosts from "./components/NewsPosts";

function App() {
  const stockIds = ["AMZN", "AAPL", "MSFT", "ORCL"];
  const [stockPrices, setStockPrices] = useState<any>(null);

  const dispatch = useAppDispatch();
  const ipLocations = useAppSelector(selectLocations);

  const { data: ipLocationData, isLoading } = useGetIpLocationQuery();
  const { data: newsPostData, isLoading: newsisLoading } =
    useGetNewPostsQuery();
  const [getLogCertificate] = useLazyGetStockPricesQuery();

  const { data, isLoading: weatherLoading } = useGetWeatherQuery(
    {
      latitude: ipLocationData?.lat,
      longitude: ipLocationData?.lon,
    },
    {
      skip: !ipLocationData,
    }
  );

  useEffect(() => {
    const fetchDataForStocks = async () => {
      const data = [];

      for (const stockId of stockIds) {
        const { data: stockData } = await getLogCertificate(stockId);
        if (stockData) data.push(stockData);
      }
      setStockPrices(data);
      dispatch(setStockPriceData(data));
    };

    fetchDataForStocks();
  }, []);

  if (isLoading || weatherLoading || newsisLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      <Header ipLocation={ipLocationData} />
      {data && (
        <Weather weatherRecord={data} regionName={ipLocations?.regionName} />
      )}
      <Stock stockPrices={stockPrices} />;
      {<NewsPosts newsList={newsPostData} />}
    </div>
  );
}

export default App;
