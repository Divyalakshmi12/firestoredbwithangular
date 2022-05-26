import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private firebase:FirebaseService) { }
  isSignedUp = false;
  hide=true
  ngOnInit(): void {
    if(localStorage.getItem('user')!== null){
      this.isSignedUp = true
    }
    else{
      this.isSignedUp = false
    }
  }

  async onSignUp(email:string,password:string){
    await this.firebase.signUp(email,password)
    if(this.firebase.isLoggedIn){
      this.isSignedUp = true
    }
  }
}
