import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from './notification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // แก้ไขจาก styleUrl เป็น styleUrls
})
export class AppComponent {
  public title = 'PR.Logistic';
  public menuItem: any = [];


  constructor(private notificationService: NotificationServiceService) {}
  ngOnInit() {
    this.menuItem = [
      {label : "Home", url : 'home'},
      {label : "Services", url : 'service'},
      {label : "Bill", url : 'bill'},
      {label : "Product", url : 'product'},
    ]
    this.notificationService.requestPermission();
    this.notificationService.receiveMessage();
  }
}
