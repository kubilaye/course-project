import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAs6TB_Thql4CojT2uHww7T6Aj4F2yArSY',
      authDomain: 'ng-recipe-book-tr.firebaseapp.com',
    });
  }
}
