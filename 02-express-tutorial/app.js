const express = require('express')
const app = express()
const { products } = require('./data')
const { people } = require('./data')
const middelwareExample = require('./middelwareExample')
// middelware function
// const middelwareExample = (req, res, next) => {
//     const date = new Date()
//     console.log(date)
//     next()
// }

// important middleware to handel the json in the request 
app.use(express.json())


// home page
app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

// about page with middelware function passed
app.get('/about', middelwareExample, (req, res) => {
    res.send('about')
})

// get all the products
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

// find a single product by id
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params

    const singleProduct = products.find((product) => {
        return product.id === Number(productID)
    })

    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }

    return res.json(singleProduct)
})

// get the data based on search query
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // return res.status(200).send('no products found')
        return res.status(200).json({
            success: true,
            data: []
        })
    }

    return res.json(sortedProducts)
})

// get people array
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    res.status(201).json({ success: true, person: name })
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})