import { Address } from './Address';
export interface Client {
    id: number;
    name: string;
    phoneNumber: string;
    addresses: Address[];
}
