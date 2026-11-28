import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.gett('/', (req, res) => {
  res.send('Hello from the server v9!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
