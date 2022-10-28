import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

const prod = process.env.NODE_ENV==='production';
const c = prod ?  {...config.dev,...config.prod} : config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

