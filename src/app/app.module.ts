import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireModule} from '@angular/fire/compat'
import { FirebaseService } from './service/firebase.service';
import { HomeComponent } from './home/home.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirestoreService } from './service/firestore.service';
import { ProductlistComponent } from './productlist/productlist.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import {MatTableModule} from '@angular/material/table';
import { EditproductComponent } from './editproduct/editproduct.component';
import{provideStorage,getStorage} from '@angular/fire/storage';
import {MatCardModule} from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { HeaderComponent } from './header/header.component';






const fireBaseConfig = {
  apiKey: "AIzaSyB--HTBKJu645QVku5AgD4hSIQO37dFqbc",
  authDomain: "e-commerce-45a9b.firebaseapp.com",
  projectId: "e-commerce-45a9b",
  storageBucket: "e-commerce-45a9b.appspot.com",
  messagingSenderId: "411984589205",
  appId: "1:411984589205:web:12534219fb62eaf40c069c",
  measurementId: "G-FZG1KYW9G8"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AddproductComponent,
    HomeComponent,
    ProductlistComponent,
    ProductdashboardComponent,
    EditproductComponent,
    AddtocartComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    provideFirebaseApp(() => initializeApp(fireBaseConfig)),
    AngularFirestoreModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatTableModule,
    provideStorage(()=> getStorage()),
    Ng2SearchPipeModule
    
    
  ],
 

  providers: [FirebaseService,FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
