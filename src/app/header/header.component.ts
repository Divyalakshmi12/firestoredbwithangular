import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private firebase:FirebaseService) { }
  @Output() isLogOut = new EventEmitter()

  ngOnInit(): void {
  }
  logout(){
    this.firebase.logout()
    localStorage.setItem("isSignedIn",'false')
    this.isLogOut.emit()
  }

}
