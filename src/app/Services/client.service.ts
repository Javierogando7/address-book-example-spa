import { Client } from '../Models/Client';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = environment.apiUrl + 'client';

  constructor(private httpClient: HttpClient) {}

  getAllClients() {
    return this.httpClient.get<Client[]>(this.baseUrl);
  }

  
}
