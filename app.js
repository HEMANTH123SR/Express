const express = require('express');
const tourRouter =require('./routes/tourRoutes')
const userRouter=require('./routes/userRoutes')

const app = express();

const port = 3000;



app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});



app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users', userRouter);


app.listen(port, () => {
  console.log(`app started`);
  console.log(`http://localhost:${port}`);
});
