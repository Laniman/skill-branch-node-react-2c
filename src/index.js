import express from 'express';
import cors from 'cors';

import parseUsername from './parseUsername';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.end(parseUsername(req.query.username));
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
