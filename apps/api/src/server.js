import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;
const app = express();
const port = Number(process.env.PORT || 4000);
const allowedOrigin = process.env.WEB_ORIGIN || 'http://localhost:3000';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://moneyframe:moneyframe@localhost:5432/moneyframe',
});

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch {
    res.status(503).json({ status: 'error', database: 'unavailable' });
  }
});

app.get('/api/tasks', async (_req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, title, description, reward_rwf AS "rewardRwf", category
       FROM tasks WHERE active = TRUE ORDER BY created_at DESC LIMIT 50`
    );
    res.json({ tasks: rows });
  } catch (error) {
    console.error('Unable to load tasks:', error.message);
    res.status(500).json({ error: 'Ntibyashobotse kubona imirimo.' });
  }
});

app.use((_req, res) => res.status(404).json({ error: 'Iyi nzira ntiboneka.' }));

const server = app.listen(port, () => {
  console.log(`Moneyframe API iri kuri http://localhost:${port}`);
});

async function shutdown() {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
