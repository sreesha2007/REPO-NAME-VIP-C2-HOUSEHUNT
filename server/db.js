const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://24eg105k22_db_user:sreesha12@ac-xb4gjjg-shard-00-00.llsdanc.mongodb.net:27017,ac-xb4gjjg-shard-00-01.llsdanc.mongodb.net:27017,ac-xb4gjjg-shard-00-02.llsdanc.mongodb.net:27017/?ssl=true&replicaSet=atlas-87hpvm-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

module.exports = mongoose;