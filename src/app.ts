import express, { Application, } from 'express'
import { createPurchaseList, getPurchaseList, getOnePurchaseList, getOneItem, patchOneItem, deleteOneItem, deleteList } from './logic'
import { validateListMiddleware, updateValidation, ensurePurchaseListExists,ensureItemExists } from './middlewares'

const app: Application = express()
app.use(express.json())

app.post('/purchaseList', validateListMiddleware, createPurchaseList)
app.get('/purchaseList', getPurchaseList )
app.get('/purchaseList/:purchaseListId', ensurePurchaseListExists, getOnePurchaseList)
app.get('/purchaseList/:purchaseListId/:itemName', ensurePurchaseListExists, ensureItemExists, getOneItem)
app.patch('/purchaseList/:purchaseListId/:itemName', ensurePurchaseListExists, ensureItemExists, updateValidation, patchOneItem)
app.delete('/purchaseList/:purchaseListId/:itemName', ensurePurchaseListExists, ensureItemExists, deleteOneItem)
app.delete('/purchaseList/:purchaseListId', ensurePurchaseListExists, deleteList)

app.listen(3000, () => {
    console.log('Server is running!')
})