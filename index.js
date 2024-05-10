
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {

    //let data = [];
    // for(let i = 1704895901; i< 1704895901; i=i+86,400){
    //     data.push({
    //         "date": i,
    //         "value": 10,
    //     });
    // }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
      let random_data = Array(500).fill(0).map((_, i) => ({ timestamp: 1715350291 + i, value: getRandomInt(40) }))
      let cieling_data = Array(100).fill(0).map((_, i) => ({ timestamp: 1715350791 + i, value: 50 }))
      
      let data = [...random_data, ...cieling_data]

  res.send(
    data
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
