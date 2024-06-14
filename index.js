import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import restrictedRoutes from './routes/restrictedRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/auth', authRoutes);
app.use('/restricted', restrictedRoutes);

// Servir el archivo HTML de inicio de sesión
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));