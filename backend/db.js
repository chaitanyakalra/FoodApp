const mongoose = require('mongoose');

// Update the MongoDB connection URI with the correct format
const mongoURI = 'mongodb+srv://FoodApp:Kalra@12345@cluster0.56eizga.mongodb.net/FoodAppMERN?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
     mongoose.connect(mongoURI,()=> {
      console.log('Connected to MongoDB');
      
    });
    const fetched_data = await mongoose.connection.db.collection("food_items")
    fetched_data.fin
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


module.exports = connectToMongoDB;


