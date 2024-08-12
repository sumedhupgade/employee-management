import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB6-PWSE1rqtVMFvXIMHvye245EiXZbZFw",
  authDomain: "employee-management-infrrd.firebaseapp.com",
  projectId: "employee-management-infrrd",
  storageBucket: "employee-management-infrrd.appspot.com",
  messagingSenderId: "757361791123",
  appId: "1:757361791123:web:357c1b38d85b08b41a3d66",
  measurementId: "G-ECF5V45C5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-management';
}
