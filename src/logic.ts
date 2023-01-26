import { NextFunction, Request, Response } from 'express'
import { purchaseList, ids } from './database'
import { IpurchaseList, InewPuchaseList, IlistRequiredKeys } from './interfaces'




const createPurchaseItem = (req: Request, res: Response) => {

    try {

        const listData: IpurchaseList = req.body

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



export { createPurchaseItem}