const express = require('express');

const app = express();

const PORT = 5501;

const bodyParser = express.json();

const {validateUser} = require ('./middlewares/index')

const UserController = require ('./controllers/UserController');

app.post('/user',bodyParser, validateUser, UserController.createUser);
app.get('/users', UserController.getAllUsers);
app.get('/user/:userId', UserController.getOneUser);
app.delete('/user/:userId', UserController.deleteUser);


app.listen (PORT, () => {
    console.log(`Server started on port ${PORT}`); 
})
