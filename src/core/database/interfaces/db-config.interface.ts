export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  staging: IDatabaseConfigAttributes;
  preprod: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
