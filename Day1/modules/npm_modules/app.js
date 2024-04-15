const axios = require("axios");
axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log(res.data.data)
  })
  .catch(err => {
    console.log(err)
  })

  