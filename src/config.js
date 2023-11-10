import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "datastudiosync.goitsoluciones.com";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "GoitDataStudioRoot2021.";
export const DB_DATABASE = process.env.DB_DATABASE || "data_studio_prueba";
export const DB_PORT = process.env.DB_PORT || 3306;