import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  currentMessage = new BehaviorSubject<any | null>(null);

  constructor(private afMessaging: AngularFireMessaging) {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('FCM Token:', token);
      },
      (error) => {
        console.error('Error obtaining FCM token:', error);
      }
    );
    
    // เรียกใช้เมธอดนี้เพื่อเริ่มฟังข้อความใหม่
    this.receiveMessage();
  }

  requestPermission() {
    this.afMessaging.requestPermission.subscribe(
      () => { console.log('Permission granted!'); },
      (error) => { console.error('Error obtaining FCM permission:', error); }
    );
  }

  receiveMessage() {
    this.afMessaging.messages.subscribe(
      (message: any) => {
        console.log("New message received halooo. ", message);
        this.currentMessage.next(message);
        // เรียกใช้ฟังก์ชันเพื่อแสดงการแจ้งเตือน
        this.showNotification(message.notification.title, message.notification.body);
        console.log("eieieii")
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private showNotification(title: string, body: string) {
    console.log("ayayaya")
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, {
            body: body
          });
        }
      });
    }
  }
}
