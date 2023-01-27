import { NextFunction, Request, Response } from 'express'
import { purchaseList, ids } from './database'
import { IpurchaseList, InewPuchaseList, } from './interfaces'


const createPurchaseList = (req: Request, res: Response) => {
    
    const newId = Math.max(...ids) +1
    const newPurchaseList: InewPuchaseList = {
        id: newId,
        ...req.body
    }
    ids.push(newId)
    purchaseList.unshift(newPurchaseList)
    return res.status(201).json({
        message: `item de id ${newId} criado`
    })
}

const getPurchaseList = (req: Request, res: Response) => {
    return res.send(purchaseList)
}

export { createPurchaseList, getPurchaseList }