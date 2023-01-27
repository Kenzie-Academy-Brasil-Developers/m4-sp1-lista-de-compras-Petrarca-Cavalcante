
interface IpurchaseItem {
    name: String,
    quantity: String,
}

interface IpurchaseList {
    listName: string,
    data: Array<IpurchaseItem>,
    id?: number,
}

interface InewPuchaseList extends IpurchaseList {
    id: number,
    
}

type IlistRequiredKeys = 'listName' | 'data'
type IitemRequiredKeys = 'name' | 'quantity'

export { IpurchaseList, InewPuchaseList, IlistRequiredKeys, IpurchaseItem, IitemRequiredKeys }