import app from './app.js'
import { PORT } from './config.js';

app.listen(PORT);

console.log("Server Iniciado en el Puerto ",PORT)