import { NextFunction, Request, Response } from 'express'
import { purchaseList, ids } from './database'
import { IpurchaseList, InewPuchaseList, IpurchaseItem} from './interfaces'


const createPurchaseList = (req: Request, res: Response) => {

    const newId = Math.max(...ids) + 1
    const newPurchaseList: InewPuchaseList = {
        id: newId,
        ...req.body
    }
    ids.push(newId)
    purchaseList.push(newPurchaseList)
    
    return res.status(201).json(newPurchaseList)
}

const getPurchaseList = (req: Request, res: Response) => {
    return res.send(purchaseList)
}

const getOnePurchaseList = (req: Request, res: Response) => {
    return res.status(200).json(
        purchaseList[req.findPurchaseListIndex]
    )
}

const getOneItem = (req: Request, res: Response) => {
    const listSelection: IpurchaseList = purchaseList[req.findPurchaseListIndex]

    return res.status(200).json(
        listSelection.data[req.itemIndex]
    )
}

const patchOneItem = (req: Request, res: Response) => {
    const listSelection: IpurchaseList = purchaseList[req.findPurchaseListIndex]

    listSelection.data[req.itemIndex] = { ...listSelection.data[req.itemIndex], ...req.body }

    return res.status(200).json(listSelection.data[req.itemIndex])
}

const deleteOneItem = (req: Request, res: Response) => {
    const listSelection: IpurchaseList = purchaseList[req.findPurchaseListIndex]
    listSelection.data.splice(req.itemIndex, 1)

    return res.status(204).json()
}

const deleteList = (req: Request, res: Response) => {
    purchaseList.splice(req.findPurchaseListIndex, 1)

    return res.status(204).json()
}

export { createPurchaseList, getPurchaseList, getOnePurchaseList, getOneItem, patchOneItem, deleteOneItem, deleteList }