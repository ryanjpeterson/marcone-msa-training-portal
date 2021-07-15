const functions = require('firebase-functions');
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const { firestore } = require('./admin');
const moment = require('moment');

const jsonParser = bodyParser.json();
app.use(
  cors({
    origin: '*',
    contentType: 'application/json',
  })
);

app.get('/', (req, res) => {
  return res.json('Hello');
});

app.get('/getWebinars', async (req, res) => {
  const webinars = [];

  await firestore
    .collection('webinars')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => webinars.push(doc.data()));
    })
    .catch((err) => res.json(err));

  return res.status(200).json(webinars);
});

app.post('/post', jsonParser, async (req, res) => {
  const post = {
    models: req.body.models,
    timeZone: req.body.timeZone,
    dates: req.body.dates,
    name: req.body.name,
    country: req.body.country,
    description: req.body.description,
    host: req.body.host,
    img: req.body.img,
    registrationURL: req.body.registrationURL,
    language: req.body.language,
    dateAdded: new Date().toISOString(),
    sortDate: req.body.sortDate,
  };

  await firestore
    .collection('webinars')
    .add(post)
    .then((doc) => {
      return res.status(200).json(`Webinar listing created under id ${doc.id}`);
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

exports.api = functions.https.onRequest(app);
