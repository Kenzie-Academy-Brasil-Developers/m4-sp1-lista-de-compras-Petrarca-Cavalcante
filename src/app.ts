import express, { Application, } from 'express'
import { createPurchaseList, getPurchaseList } from './logic'

const app: Application = express()
app.use(express.json())

app.post('/purchaseList', createPurchaseList )
app.get('/purchaseList', getPurchaseList )

app.listen(3000, () => {
    console.log('Server is running!')
})