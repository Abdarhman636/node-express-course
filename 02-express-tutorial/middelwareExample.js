// middelware function
const middelwareExample = (req, res, next) => {
     const date = new Date()
     console.log(date)
     next()
}

module.exports = middelwareExample