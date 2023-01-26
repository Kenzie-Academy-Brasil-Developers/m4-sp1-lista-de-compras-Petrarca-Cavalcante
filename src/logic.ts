import { NextFunction, Request, Response } from 'express'
import { purchaseList, ids } from './database'
import { IpurchaseList, InewPuchaseList, IlistRequiredKeys } from './interfaces'

const validateList = (payload: any): IpurchaseList => {

    const keys: Array<string> = Object.keys(payload)
    const requiredListKeys: Array<IlistRequiredKeys> = ['data', 'listName']

    const containsAllKeys: boolean = requiredListKeys.every((key: string) => {
        
        return keys.includes(key)
    })

    if (!containsAllKeys) {
        throw new Error(`Required fields are ${requiredListKeys}`)
    }
    return payload
}


const createPurchaseList = (req: Request, res: Response) => {

    try {

        const listData: IpurchaseList = validateList(req.body)

        const id: number = Math.floor(Math.random() * 1000)

        const idExists = ids.find((currentId) => { currentId == id })
        if (idExists) {
            return res.status(501).json({
                'message': 'Tente novamente, ocorreu um erro'
            })
        }

        const purchaseListAdd: InewPuchaseList = {
            id: id,
            addDate: new Date(),
            ...listData
        }

        ids.push(id)
        purchaseList.push(purchaseListAdd)

        return res.status(201).send(`um objeto contendo os dados da lista criada`)

    } catch(error) {
        if( error instanceof Error ){
            return res.status(400).json({
                message: error.message
            })
        }

        return res.status(500).json({
            message: "internal server error",
        })
    }
}

const getPurchaseList = (req: Request, res: Response) => {
    return res.send(purchaseList)
}

export { createPurchaseList, getPurchaseList }