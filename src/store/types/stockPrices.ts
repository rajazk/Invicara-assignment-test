export interface IStockPrices {
  "Meta Data": IMetsData;
  "Time Series (Daily)": ITimeSeriesDaily[];
}

export interface IMetsData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Last Refreshed": string;
  "5. Output Size": string;
  "6. Time Zone": string;
}

export interface ITimeSeriesDaily {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface IStockPricesResponse {
  data: IStockPrices;
}
