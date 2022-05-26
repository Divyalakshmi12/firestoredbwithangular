import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { FirestoreService } from '../service/firestore.service';
import { FormControl, FormGroup } from "@angular/forms";
import {Storage,ref,uploadBytesResumable,getDownloadURL} from '@angular/fire/storage'





@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],

})
export class AddproductComponent implements OnInit {
 
  constructor(public firestore:FirestoreService,public storage:Storage) { }
 isAddClickFlag:number = 0;
  
  public file:any = {}

   productForm = new FormGroup({
    Name:new FormControl(''),
    Description:new FormControl(''),
    Price:new FormControl(''),
    prodImage:new FormControl('')
  })

  ngOnInit(): void {
    

  }
  
  receiveGetData($event: any){
    return $event
 }
 

  addProduct(values:any){
     
  values["prodImage"] = this.fileInputVal;
  this.firestore.addProduct(values,values["prodImage"])
  // this.fileInputVal = ''
  this.isAddClickFlag = 0
   console.log(values)
   console.log(values.prodImage)

   this.isAddClickFlag = 1
    

  }

  public fileInputVal:any;
  chooseFile(event:any){
    
    this.file = event.target.files[0]
    console.log(this.file)
   
   
    const storageRef = ref(this.storage,`Images/${this.file.name}`)
  const uploadTask = uploadBytesResumable(storageRef,this.file)
  uploadTask.on('state_changed',
  (snapshot) =>{
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

 
    console.log('Upload is'+ progress +'% done')
  },
  (error) =>{console.log(error.message)},
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{

      this.fileInputVal = downloadURL;
      console.log("fileURL",this.fileInputVal)
     
  
      console.log("file available at"+downloadURL)
      console.log("after"+event)
    })
  }
  )
  }
  

}
