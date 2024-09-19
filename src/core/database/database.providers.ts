/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, STAGING, PREPROD, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case STAGING:
          config = databaseConfig.staging;
          break;
        case PREPROD:
          config = databaseConfig.preprod;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels(['models goes here']);
      await sequelize.sync();
      return sequelize;
    },
  },
];
