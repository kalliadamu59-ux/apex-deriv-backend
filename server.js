const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/callback', (req, res) => {
  const { token1, acct1 } = req.query;
  const netlifyFrontend = 'https://sunny-belekoy-a7e4ed.netlify.app/';
  
  if (token1) {
    res.redirect(`${netlifyFrontend}#token1=${token1}&acct1=${acct1}`);
  } else {
    res.redirect(netlifyFrontend);
  }
});

app.get('/', (req, res) => {
  res.send('ApexSignal Backend Server is Running Live!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
