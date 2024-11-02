import { Component } from '@angular/core';

interface Item {
  serialNumber: string;
  status: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent {
  items: Item[] = [
    { serialNumber: 'SN001', status: 'Active' },
    { serialNumber: 'SN002', status: 'Inactive' },
    { serialNumber: 'SN003', status: 'Active' },
  ];
}
