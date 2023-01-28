const express = require('express');
const app = express();
const path = require('path')
const PORT = 3020;

//Enrutadores
const indexRouter = require('./routers')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/?', indexRouter)

app.get('/about',  (req, res)=> {
    res.sendFile(path.join(__dirname, '../views/about.html'))
})





app.listen(PORT, () => console.log(`Servidor levantado en el puerto pinche ${PORT} \n http://localhost:${PORT}`));
