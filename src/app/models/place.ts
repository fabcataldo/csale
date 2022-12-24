import { CustomerServiceSchedules } from "./customerServiceSchedules";
import { Ticket } from "./ticket";

export interface Place {
    _id: number,
    tickets: Array<Ticket>,
    name: string,
    address: string,
    number_of_people_enabled: number,
    lat: number,
    lng: number,
    social_media_urls: Array<string>,
    available_payment_methods: Array<number>,
    customer_service_schedules: Array<CustomerServiceSchedules>,
    images: Array<string>,
    tags: Array<string>,
    experiences: Array<number>
}
