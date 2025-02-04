import express from 'express';
import { LokaliseApi } from '@lokalise/node-api';
import cors from 'cors';

const LOKALISE_API_KEY = '2e2d01925db5058c8c02ffdcd13c5fbc6d22d0be';
const PROJECT_ID = '5299555567a187890d0fc7.02721238';
const app = express();
const lokalise = new LokaliseApi({ apiKey: LOKALISE_API_KEY });

// Configura el middleware CORS
app.use(cors());

app.get('/translations', async (req, res) => {
  try {
    const lang = req.query.lang || 'en'; // Default to English
    const keys = await lokalise.keys().list({ project_id: PROJECT_ID, filter_filenames: 'en.json', include_translations: 1 });
    
    const translations = {};
    keys.items.forEach((key) => {
      // Find the translation for the requested language
      if (key.translations) {
        const translationEntry = key.translations.find((t) => t.language_iso === lang);
        if (translationEntry && translationEntry.translation) {
          translations[key.key_name.web] = translationEntry.translation;
        }
      }
    });

    res.json(translations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));