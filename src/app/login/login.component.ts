import { Component, OnInit} from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public firebase: FirebaseService) { }
  isSignedInUser = false
 

  ngOnInit(): void {
    if(localStorage.getItem('isSignedIn') == 'true'){
      this.isSignedIn = true
    }
    else{
      this.isSignedIn = false
    }
  }
  hide = true;
  isSignedIn = false

  



 

  async onSignIn(email:string,password:string){
    await this.firebase.signIn(email,password)
    if(this.firebase.isLoggedIn){
      this.isSignedIn = true

    }
  }
  

  handleLogout(){
    this.isSignedIn = false
  }
}
