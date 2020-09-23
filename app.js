const express = require("express");
const app = express();
const cors = require('cors');
const fishRoutes = require("./routes/fishes");
const morgan = require('morgan');
const path = require("path");
const PORT = process.env.PORT ||  3000;

//process.env.NODE_ENV => production or undefined

app.use(cors());

app.use(express.urlencoded({ extended: true }));


app.use(express.json());


// app.use(bodyParser.json());

app.use(morgan("tiny"));

app.use("/fishes", fishRoutes )


app.use(function(req, res, next) {
    const err = new Error();
    error.status = 404;
    next(err)
});

if(app.get("env") === "development"){
    app.use((err, req, res, next)=> {
        res.status(err.status || 500)
        res.send({
            message: err.message,
            error: err
        });
    });
}

if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"client/fishes_app/build")))
}
console.log('__dirname', __dirname);

app.listen(PORT, () => {console.log(`server started port 3000 ${PORT}`)}); 