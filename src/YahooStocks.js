import React, { useEffect, useState } from "react";

import "./stocks.css"

const YahooStocks = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = () => {
    const axios = require("axios");
    axios.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary", {
      params: {
        region: "US",
        lang: "en",
      },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
    .then(function (response) {
      console.log(response);
      setResponse(response.data.marketSummaryResponse.result);
    })
    .catch((error) => console.log(`ERROR:\n${error}`))
  }

  return (<div className="stocks-display">
    {response.length !== 0
      ? response.slice(0, 5).map((stock, i) => {
        return <div key={stock.exchange} className={`stock-${i}`}>
          <span>{stock.shortName + " "}</span>
          <span>{stock.regularMarketPrice.raw + " "}</span>
          {stock.regularMarketChangePercent.raw > 0
            ? <span style={{color: "green"}}>{stock.regularMarketChangePercent.fmt}</span>
            : <span style={{color: "red"}}>{stock.regularMarketChangePercent.fmt}</span>}
        </div>
      })
      : "stocks unavailable"}
  </div>);
}

export default YahooStocks;