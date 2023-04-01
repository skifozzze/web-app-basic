const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'handlebars',
  exhbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
  })
);

app.get('/', (req, res) => {
  console.log('this is callback for app.get(" / ")');
  console.log(req.url);
  res.send('<h2> hello, this is /</h2>');
});

app.get('/about', (req, res) => {
  console.log('this is callback for app.get(" /about ")');
  console.log(req.url);
  res.send('<h1> hello, this is /about </h1>');
});

app.listen(4444, () => {
  console.log(`application server is running on port ${4444}`);
});
