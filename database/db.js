const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.k5y6mbh.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
      {
        useNewUrlParser: true, // evitando erros
        useUnifiedTopology: true, //     de conexoes
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
