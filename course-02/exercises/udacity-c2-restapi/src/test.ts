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
  let client
  try {
      client = new Client(conParams);
  }catch (e){
      console.log(e);
  }
async function main() {
  await client.connect();
  const res = await client.query("SELECT NOW()");
  console.log(res);
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
