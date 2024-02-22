const app = require('./app');
const mongoose = require("mongoose");
const http = require('http');

const { loadPlanetsData } = require('./models/planets.model')
const server = http.createServer(app);

const PORT = process.env.PORT || 5000

const MONGO_URL = "mongodb+srv://apurvabasule:pMjtJekUCAMW8uWg@cluster0.xoobs8y.mongodb.net/?retryWrites=true&w=majority"


async function startServer() {
   await mongoose.connect(MONGO_URL);
   await loadPlanetsData();
   server.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}....`);
   })
}

mongoose.connection.on('open', () => {
   console.log('MongoDB Connection is ready!');
})
mongoose.connection.on('error', (err) => {
   console.error(err);
})

startServer();
