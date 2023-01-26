
interface IpurchaseItem {
    name: String,
    quantity: String,
}

interface IpurchaseList {
    listName: String,
    data: Array<IpurchaseItem>,
}

interface InewPuchaseList extends IpurchaseList {
    id: number,
    addDate: Date,
}

type IlistRequiredKeys = 'listName' | 'data'

export { IpurchaseList, InewPuchaseList, IlistRequiredKeys }