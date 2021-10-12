import { ClientService } from './../../Services/client.service';
import { Client } from './../../Models/Client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  currentClient: any;
  name = '';
  phoneNumber = '';

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(res => {
      this.clients = res;
    });
  }

  changeClient(event: any) {
    this.clientService.changeCurrentClient(event.selectedOptions.selected[0]?.value);
  }

  addClient() {
    this.clientService.addClient({name: this.name, phoneNumber: this.phoneNumber}).subscribe(() => {
      this.getAllClients();
    });
  }
}
