import { Request, Response, NextFunction } from "express";
import { IpurchaseList, IlistRequiredKeys, IpurchaseItem, IitemRequiredKeys } from "./interfaces";
import { purchaseList } from "./database";

const validateListMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {

    const keys: Array<string> = Object.keys(req.body)
    const items = req.body.data
    const requiredKeys: Array<IlistRequiredKeys> = ['listName', 'data']
    const itemRequiredKeys: Array<IitemRequiredKeys> = ['name', 'quantity']


    keys.forEach((key: any) => {
        if (!requiredKeys.includes(key)) {
            return res.status(400).json({ message: `invalid keys, required keys are ${requiredKeys}` })
        }
    })

    items.forEach((i: Object) => (
        Object.keys(i).forEach((itemKey: any) => {
            if (!itemRequiredKeys.includes(itemKey)) {
                return res.status(400).json({
                    message: `invalid item keys, required item keys are ${itemRequiredKeys}`
                })
            }
        })
    ))

   

    itemRequiredKeys.forEach((i: string) => {
        items.forEach((item: any) => {
            if (!Object.keys(item).includes(i)) {
                return res.status(400).json({
                    message: `Missing item keys, required item keys are ${itemRequiredKeys}`
                })
            }
        })
    })

    requiredKeys.forEach(key => {
        if (!keys.includes(key)) {
            return res.status(400).json({ message: `Not all keys have been send, required keys are ${requiredKeys}` })
        }
    })


    req.validatedPurchaseList = {
        listName: req.body.listName,
        data: req.body.data,
    }
    next()
}

// const ensurePurchaseListExists = (req: Request, res: Response, next: NextFunction): Response | void => {
//     const id: number = parseInt(req.params.id)

//     const findPurchaseList: number = purchaseList.findIndex(purchaseList => purchaseList.id === id)

//     if( findPurchaseList === -1 ) {
//         return res.status(404).json({
//             message: 'List not found'
//         })
//     }

//     req.findPurchaseListIndex = findPurchaseList
//     next()
// }

export { validateListMiddleware }
    // ensurePurchaseListExists