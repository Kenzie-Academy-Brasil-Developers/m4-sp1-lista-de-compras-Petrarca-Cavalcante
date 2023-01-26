import express, { Application, Request, Response } from 'express'
import { createPurchaseItem } from './logic'

const app: Application = express()
app.use(express.json())

app.post('/purchaseList', createPurchaseItem )


app.listen(3000, () => {
    console.log('Server is running!')
})