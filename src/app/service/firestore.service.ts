import { Injectable } from '@angular/core';
import {addDoc,collection,Firestore} from '@angular/fire/firestore'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { getAdditionalUserInfo } from 'firebase/auth';
import { getDocs } from 'firebase/firestore';

// import {Firestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  
  constructor(public firestore:Firestore) { }

 
  addProduct(values:any,prodImageVal:string){

   const dbInstance = collection(this.firestore,'user');
    addDoc(dbInstance,{
      Name:values.Name,
      Description:values.Description,
      Price:values.Price,
      prodImage:prodImageVal
    })
    .then(()=>{
      alert('data added successfully')
    
    })
    .catch((err)=>{
      alert(err.message)
    })
   }

   

  }