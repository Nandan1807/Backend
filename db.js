const mongoose = require("mongoose");
const mongourl = "mongodb+srv://nandanjoshi1807:nandan18@cluster0.h6l4wsb.mongodb.net/foodiz?retryWrites=true&w=majority&appName=AtlasApp";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongourl, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
    
    const Fetched_data = await mongoose.connection.db.collection("fooddata");
    const itemdata = await Fetched_data.find({}).toArray();
    const Food_cat = await mongoose.connection.db.collection("foodcatagories");
    const catagorydata = await Food_cat.find({}).toArray();
    global.food_catagory = catagorydata;
    global.food_items = itemdata;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDb;
