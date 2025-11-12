import express from 'express';

const app = express();
const port = 3000;

//Static files from public
app.use('/public', express.static('public'));

// Hello world route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Cat route
app.get('/api/v1/cat', (req, res) => {
  const cat = {
    cat_id: 1,
    name: "Kitty",
    birthdate: "2020-02-02",
    weight: 4,
    owner: "Liisa",
    image: "https://loremflickr.com/320/240/cat"
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
