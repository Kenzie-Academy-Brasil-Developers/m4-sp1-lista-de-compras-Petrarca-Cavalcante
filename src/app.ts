import express, { Application, } from 'express'
import { createPurchaseList, getPurchaseList } from './logic'
import { validateListMiddleware  } from './middlewares'
// ensurePurchaseListExists

const app: Application = express()
app.use(express.json())

app.post('/purchaseList', validateListMiddleware, createPurchaseList )
app.get('/purchaseList', getPurchaseList )

app.listen(3000, () => {
    console.log('Server is running!')
})