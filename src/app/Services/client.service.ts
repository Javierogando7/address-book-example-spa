import { Address } from './../Models/Address';
import { Client } from '../Models/Client';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = environment.apiUrl + 'client';
  client = new BehaviorSubject<Client>({id: 0, name: '', phoneNumber: '' });
  currentClient = this.client.asObservable();

  constructor(private httpClient: HttpClient) {}

  changeCurrentClient(client: Client){
    this.client.next(client);
  }

  getAllClients() {
    return this.httpClient.get<Client[]>(this.baseUrl);
  }

  getAllAddresses(clientId: number){
    return this.httpClient.get<Address[]>(this.baseUrl + '/' + clientId + '/address')
  }

  addClient(client: any) {
    return this.httpClient.post(this.baseUrl, client);
  }

  addAddress(clientId: number, address: any) {
    return this.httpClient.post(this.baseUrl + '/' + clientId + '/address', address);
  }
}
