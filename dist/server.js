import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on http://localhost:${PORT}`);
    });
});
