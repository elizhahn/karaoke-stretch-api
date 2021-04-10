const express = require('express'); 
const app = express(); 
const db = require('./queries');
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.set('port', process.env.PORT || 3000);
app.locals.title = 'CarryOkay'; 

app.get('/', (request, response) => {
  response.send('test');
})


app.get('/songs', db.getSongs)

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});