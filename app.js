const Express=require("express");

    var app=new Express();

    app.set('view engine','ejs');

   app.use(Express.static(__dirname+"/public"));
        ifconfig || grep, "inet"

   
    app.get('/',(req,res)=> {
        res.render('index');
    });
    
    app.get('/login',(req,res)=>{
        res.render('login');
    });

    app.get('/register',(req,res)=>{
        res.render('register');
    });
    
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server running on port::3000...");
    });




