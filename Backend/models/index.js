const mongoose = require("mongoose");
// const uri = "mongodb+srv://gulshan:gulshan24gir@cluster0.xkredtt.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://dbUser:password2@cluster0.hcnlr7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// n2RJjf4GIzwz0ojQ

function main() {
    // mongoose.connect(uri).then(() => {
    //     console.log(" db Succesfull connected")
    
    // }).catch((err) => {
    //     console.log("Error: ", err)
    // })

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });
}

module.exports = { main };