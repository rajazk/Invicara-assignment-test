import React from "react";
import { Typography, Container, Grid, Box, Paper } from "@mui/material";
import { IStockPrices, ITimeSeriesDaily } from "../../store/types/stockPrices";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import moment from "moment";

type Props = {
  stockPrices: IStockPrices[];
};

const Stock = ({ stockPrices }: Props) => {
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h4" color="primary" gutterBottom>
        Current Stock Prices
      </Typography>
      {stockPrices &&
        stockPrices.map((stockePrice: IStockPrices, index: number) => {
          if (
            stockePrice.hasOwnProperty("Note") ||
            stockePrice.hasOwnProperty("Information")
          )
            return null;

          return (
            <React.Fragment key={index}>
              <Typography
                component="h1"
                variant="h4"
                color="primary"
                gutterBottom
                pt={2}
              >
                {stockePrice["Meta Data"]["2. Symbol"]}
              </Typography>
              <Grid container spacing={2}>
                {Object.keys(stockePrice["Time Series (Daily)"])
                  .slice(0, 3)
                  .map((stockItem: any, index: number) => {
                    const stock: ITimeSeriesDaily =
                      stockePrice["Time Series (Daily)"][stockItem];
                    const maxDiff =
                      Number(stock["2. high"]) - Number(stock["1. open"]);
                    const minDiff =
                      Number(stock["1. open"]) - Number(stock["3. low"]);
                    return (
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <Paper
                          sx={{
                            px: 1,
                            py: 3,
                          }}
                        >
                          <Box
                            display="flex"
                            alignItems={"flex-start"}
                            justifyContent={"space-between"}
                            mb={"20px"}
                          >
                            <Box>
                              <Typography
                                component="h2"
                                variant="h6"
                                color="primary"
                              >
                                Volume
                              </Typography>
                              <Typography>{stock["5. volume"]}</Typography>
                            </Box>
                            <Typography color="text.secondary">
                              {moment(stockItem).format("DD/MM/YYYY")}
                            </Typography>
                          </Box>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Box display={"flex"} alignItems={"center"}>
                                <Typography
                                  component="h2"
                                  variant="h6"
                                  color="primary"
                                >
                                  Open:
                                </Typography>
                                <Typography component="p">
                                  {stock["1. open"]}
                                </Typography>
                              </Box>
                              <Box display={"flex"} alignItems={"center"}>
                                <Typography
                                  component="h2"
                                  variant="h6"
                                  color="primary"
                                >
                                  Close:
                                </Typography>
                                <Typography component="p">
                                  {stock["1. open"]}
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <Box display={"flex"} alignItems={"center"}>
                                <Typography
                                  component="h2"
                                  variant="h6"
                                  color="primary"
                                >
                                  High:
                                </Typography>
                                <Typography component="p">
                                  {stock["2. high"]}
                                </Typography>
                                <Typography
                                  component="span"
                                  color={"green"}
                                >{`(+${maxDiff.toFixed(4)})`}</Typography>
                                <TrendingUpIcon sx={{ color: "green" }} />
                              </Box>

                              <Box display={"flex"} alignItems={"center"}>
                                <Typography
                                  component="h2"
                                  variant="h6"
                                  color="primary"
                                >
                                  Low:
                                </Typography>
                                <Typography component="p">
                                  {stock["3. low"]}
                                </Typography>
                                <Typography
                                  component="span"
                                  color={"red"}
                                >{`(-${minDiff.toFixed(4)})`}</Typography>
                                <TrendingDownIcon sx={{ color: "red" }} />
                              </Box>
                            </Box>
                          </Box>
                        </Paper>
                      </Grid>
                    );
                  })}
              </Grid>
            </React.Fragment>
          );
        })}
    </Container>
  );
};

export default Stock;
