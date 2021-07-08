const functions = require('firebase-functions');
const app = require('express')();
const { firestore } = require('./admin');

app.get('/webinars', async (req, res) => {
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

app.post('/addWebinar', async (req, res) => {
  return res.json({
    models: req.body.models,
    // timeZone: req.body.timeZone,
    // dates: req.body.dates,
    // name: req.body.name,
    // country: req.body.country,
    // description: req.body.description,
    // host: req.body.host,
    // img: req.body.img,
    // registrationURL: req.body.registrationURL,
    // language: req.body.language,
  });
  //   await firestore
  //     .collection('webinars')
  //     .add({
  //       models: req.body.models,
  //       timeZone: req.body.timeZone,
  //       dates: req.body.dates,
  //       name: req.body.name,
  //       country: req.body.country,
  //       description: req.body.description,
  //       host: req.body.host,
  //       img: req.body.img,
  //       registrationURL: req.body.registrationURL,
  //       language: req.body.language,
  //     })
  //     .then((doc) => res.json(doc.id))
  //     .catch((err) => res.json(err));
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

exports.api = functions.https.onRequest(app);
const schema = {
  models: [],
  timeZone: '',
  dates: [
    {
      day: '',
      time: '',
    },
  ],
  name: '',
  country: '',
  description: '',
  host: '',
  img: '',
  registrationURL: '',
  language: '',
};
