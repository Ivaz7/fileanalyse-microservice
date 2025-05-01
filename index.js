var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer')
const upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static('/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
})


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const {
    originalname,
    mimetype,
    size,
  } = req.file

  res.json({
    name: originalname,
    type: mimetype,
    size: size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
