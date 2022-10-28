import { Client } from "pg";
import { config } from "./config/config";
const c = config.dev;
const conParams ={
    user: c.username,
    password: c.password,
    database: c.database,
    port: 5432,
    host: c.host,
  };
  console.log(conParams);
const client = new Client(conParams);
async function main() {
  await client.connect();
  const res = await client.query("SELECT NOW()");
  await client.end();
}

main().then(
  () => {
    console.log("db ready");
  },
  () => {
    console.log("error");
  }
);
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);
