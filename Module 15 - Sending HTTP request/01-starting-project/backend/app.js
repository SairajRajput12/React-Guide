import express from "express";
import { promises as fsPromises } from 'fs';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('images'));
// it exposes the images stored in the image directory in direct backend server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 3000;

app.get('/places', async (req, res) => {
  try {
    const fileContent = await fsPromises.readFile('./data/places.json');
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/user-places', async (req, res) => {
  try {
    const fileContent = await fsPromises.readFile('./data/user-places.json');
    const places = JSON.parse(fileContent);
    res.status(200).json({ places });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/user-places', async (req, res) => {
  try {
    const places = req.body.places;
    await fsPromises.writeFile('./data/user-places.json', JSON.stringify(places));
    res.status(200).json({ message: 'User places updated!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
