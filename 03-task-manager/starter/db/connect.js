const mongoose = require('mongoose')

const cennectDB = (url) => {
     return mongoose.connect(url, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
     })
}

module.exports = cennectDB