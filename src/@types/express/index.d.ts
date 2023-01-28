import { IpurchaseItem } from "../../interfaces"

declare global {
    namespace Express {
        interface Request {
            validatedPurchaseList: {
                listName: string,
                data: Array<IpurchaseItem>,
            }
            findPurchaseListIndex: number,
            itemIndex: number,            
        }
    }
}

export {}