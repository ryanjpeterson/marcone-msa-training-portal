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

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

exports.api = functions.https.onRequest(app);
