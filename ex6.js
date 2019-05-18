const students =  [{
    "id": 1,
    "name": "Tinela"
}, {
    "id": 2,
    "name": "Gescu"
}] ;



const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

 
app.get('/', function(req, res) {
    res.send("Hello World");
});
app.get('/api/students', function(req, res) {
    res.send(students);
});
app.get('/api/students/:id', function(req, res) {
    res.send(students[req.params.id]);
});
app.post('/api/students',(req,res)=> {
        
    var name= req.body.name;
    const student= {
        id: students.length +1,
        name: name
    
    };
    students.push(student);
    res.send(students);
});

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`Listening on port ${port}!`))

