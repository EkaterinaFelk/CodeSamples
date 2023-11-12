import express from "express";
import axios, { AxiosRequestConfig } from "axios";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const apiPath = "https://api.thecatapi.com/v1/images/search?limit=20";
const api_key = "DEMO_API_KEY";

const config: AxiosRequestConfig = {
  headers: {
    "x-api-key": api_key,
  },
};

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", async (req, res) => {
  const response = await axios.get(apiPath, config);
  res.json(response.data);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
