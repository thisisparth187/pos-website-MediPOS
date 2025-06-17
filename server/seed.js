const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust path if your model is elsewhere
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); // Ensure .env variables are loaded

const seedDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in .env file');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected for seeding...');

    // Construct the path to backData.json relative to the /app directory (project root)
    // The seed script is in /app/server/seed.js, backData.json is in /app/src/data/backData.json
    const dataPath = path.join(__dirname, '../src/data/backData.json');

    let rawData;
    try {
      rawData = fs.readFileSync(dataPath, 'utf-8');
    } catch (readError) {
      console.error(`Error reading data from ${dataPath}:`, readError.message);
      console.error("Make sure the path is correct and the file exists.");
      console.error("Current directory (__dirname):", __dirname);
      console.error("Calculated dataPath:", dataPath);
      await mongoose.disconnect();
      process.exit(1);
    }

    const productsToSeed = JSON.parse(rawData);

    // Validate that productsToSeed is an array (or whatever structure Product.insertMany expects)
    if (!Array.isArray(productsToSeed)) {
        // Attempt to access a 'products' property if the top level is an object
        const productsArray = productsToSeed.products;
        if (!Array.isArray(productsArray)) {
            console.error('Error: Data read from backData.json is not an array, nor does it have a .products property that is an array. Please check the file structure.');
            console.log('Parsed data structure:', JSON.stringify(productsToSeed, null, 2));
            await mongoose.disconnect();
            process.exit(1);
        }
        // If productsToSeed.products is an array, use that.
        console.log("Using 'products' array from backData.json");
        productsToSeed = productsArray;
    }


    await Product.deleteMany({});
    console.log('Existing products cleared...');

    await Product.insertMany(productsToSeed);
    console.log('Database seeded successfully with new products!');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
    process.exit(0); // Ensure script exits
  }
};

seedDB();
