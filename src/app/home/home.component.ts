import { Component, OnInit,Output ,EventEmitter } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Firestore,collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebase:FirebaseService,private firestore:Firestore,private router:Router) { }
  @Output() isLogOut = new EventEmitter()
  
  

  ngOnInit(): void {
   
  }
  logout(){
    this.firebase.logout()
    localStorage.setItem("isSignedIn",'false')
    this.isLogOut.emit()
    // this.router.navigate(['signin'])
  }






}