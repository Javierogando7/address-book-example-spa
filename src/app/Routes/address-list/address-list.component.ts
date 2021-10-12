import { Address } from './../../Models/Address';
import { ClientService } from './../../Services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
  addresses: Address[] = [];
  country = '';
  city = '';
  address = '';
  client: any;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.currentClient.subscribe((client) => {
      this.getAddress(client.id);
      this.client = client;
    });
  }

  getAddress(clientId: number) {
    if (clientId > 0) {
      this.clientService.getAllAddresses(clientId).subscribe((res) => {
        this.addresses = res;
      });
    }
  }

  addAddress() {
    if (this.client.id > 0) {
      this.clientService.addAddress(this.client.id, {
        city: this.city,
        country: this.country,
        details: this.address,
      }).subscribe(() => {
        this.getAddress(this.client.id);
      });
    }
    
  }
}
