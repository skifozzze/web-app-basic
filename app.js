import express from 'express';
import { engine, create } from 'express-handlebars';
import products from './products.json' assert { type: 'json' };

const app = express();

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about', pageTitle: 'About' });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    pageTitle: 'Products',
  });
});

app.get('/product/:productId', (req, res) => {
  const product = products.find(p => p.id === req.params.productId);

  res.render('product', { product, pageTitle: 'Product' });
});

app.listen(4444, () => {
  console.log(`application server is running on port ${4444}`);
});
