import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import {Firestore} from '@angular/fire/firestore'
import { Router } from '@angular/router';
import {Storage,ref,uploadBytesResumable,getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  @Input() name:string = "";
  public fileInputVal:any;
  productId:any = this._activateRoute.snapshot.paramMap.get('id')
  // productForm: any;

  productForm = new FormGroup({
    Name:new FormControl(''),
    Description:new FormControl(''),
    Price:new FormControl(''),
    prodImage:new FormControl('')
  })

  constructor(private router:Router,private _activateRoute:ActivatedRoute,private firestore:Firestore,public storage:Storage) { }

  ngOnInit(): void {
  
    this.getData()
    

    
  }


  // updateProductInfo(){
  //   return this.getData()
  // }


  allData:any;
  getData(){
    const dbInstance = collection(this.firestore,'user');
    getDocs(dbInstance)
    .then((response)=>{
       this.allData = [...response.docs.map((item)=>{
      
       
        return {...item.data(),id:item.id}
      })]
    
        for (let i = 0; i <  this.allData.length; i++) {
          console.log(this.allData)
          console.log(this.allData[i].id === this.productId)
          if (this.allData[i].id === this.productId) {
            this.fileInputVal = this.allData[i].prodImage;
            
            console.log("hi"+this.allData[i].prodImage)
              this.productForm.setValue({
                Name:this.allData[i].Name,
                Description:this.allData[i].Description,
                Price:this.allData[i].Price,
                prodImage:this.allData[i].prodImage
              })
              // this.fileInputVal = 
            
          }
      } 
   
  })
}



public file:any = {}
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





editProduct(value:any){
  value["prodImage"] = this.fileInputVal
  console.log()
  alert(this.fileInputVal)
  const dateToUpdate= doc(this.firestore,'user',this.productId);
  updateDoc(dateToUpdate,{
    Name:value.Name,
    Description:value.Description,
    Price:value.Price,
    prodImage:value.prodImage
   
  })
    .then(()=>{
      alert("data updated")
      this.router.navigate(['/addproduct'])
      this.fileInputVal = '';
      value["prodImage"]=''
    })
    .catch((err)=>{
      alert(err.message)
   })
console.log(value)
console.log("prodImage"+value["prodImage"])
console.log("dateToUpdate",dateToUpdate)

}

}
