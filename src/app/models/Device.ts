import { Manufacturer } from './Manufacturer';

export interface Device {
    serial:string,
    manufacturer_id:number,
    description:string,
    created_at:string,
    updated_at:string,
    manufacturer:Manufacturer
}
