module.exports = function(app, db, jsonParser){
    var fields = ["username", "password"];
    console.log("affichage du donnees /user");
 
    app.get('/user', function(req, res){
        console.log("SELECT " + fields.join(", ") + " FROM user");
        db.all("SELECT " + fields.join(", ") + " FROM  user", function(err, rows) {
            res.json(rows);
        });
           });
    
    console.log("insertion du donnees /user/insert/:username/:password");

      app.post('/user/insert/:username/:password', function(req, res) {
   
         var username= req.params.username;
        var password= req.params.password;

        db.get("INSERT INTO user  VALUES (?,?)",username,password, function(err, rows) {
            res.json({message : "ajouter"});
            console.log("insert avec succees");
        
}) ;         
    });
         console.log("affichage du donnees /user/:username/:password");
 
    app.get('/user/:username/:password', function(req, res){

         var username= req.params.username;
        var password= req.params.password;
        console.log("SELECT " + fields.join(", ") + " FROM user ",);
        db.all("SELECT " + fields.join(", ") + " FROM  user where username=? and  password = ?",username,password, function(err, rows) {
            res.json(rows);
        });
           });
    
}
