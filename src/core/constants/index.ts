import { Logger } from '@nestjs/common';

export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const STAGING = 'staging';
export const PREPROD = 'preprod';
export const PRODUCTION = 'production';

// need chage to db or env
export const URI_PRODUCT = 'https://dummyjson.com/products/search';
export const URI_LOGIN = 'https://uat-pay-kairos.siloamhospitals.com/api/connect/token';

export const LOGGER = new Logger();
