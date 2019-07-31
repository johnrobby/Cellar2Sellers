var db = require("../models")


db.Wine.create({
   text: "Houglass"
})
.then(function(success){
    console.log(success)
})
.catch(function(err){
    console.log(err)
});