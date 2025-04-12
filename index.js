const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
app.get('/', (req,res) => {
  res.send('Welcome to the docker and google cloud, Task 5.2D - Deploying the microservice to the cloud');
});
app.listen(PORT, () => {
  console.log(`Hosting is done on the port ${PORT}`);
});