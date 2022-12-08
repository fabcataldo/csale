export interface Ticket {
    id: number,
    purchased_products: Array<number>,
    date_of_purchase: string,
    total: number
}