import express from 'express';
import { LokaliseApi } from '@lokalise/node-api';

const LOKALISE_API_KEY = '';
const PROJECT_ID = '';
const app = express();
const lokalise = new LokaliseApi({ apiKey: LOKALISE_API_KEY });

app.get('/translations', async (req, res) => {
  try {
    const translations = await lokalise.files.list({ project_id: PROJECT_ID });
    res.json(translations);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));