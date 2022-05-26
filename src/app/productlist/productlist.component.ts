import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Firestore,collection, getDocs,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public term:any
  public productData:any =[]
  constructor(private firebase:FirebaseService,private firestore:Firestore,private route:Router) { }

  ngOnInit(): void {
    this.getProductDataDisplay()
  }

  getProductDataDisplay(){
  
    const dbInstance = collection(this.firestore,'user');
    getDocs(dbInstance)
    .then((response)=>{
       this.productData = [...response.docs.map((item)=>{
      
       
        return {...item.data(),id:item.id}
      })]
      console.log(this.productData)
    })
}

addToCart(id:any,values:any){
  console.log(values)
  this.addCartData(values)
  this.route.navigate(['/addtocart'])
}

addCartData(cartData:any){
  const dbInstance = collection(this.firestore,'productCart');
   addDoc(dbInstance,{
    prodId:cartData.id,
    productImage:cartData.prodImage,
    prodName:cartData.Name,
    prodDescription:cartData.Description,
    prodPrice:cartData.Price,
    prodQuantity:1,
    prodtotal:cartData.Price * 1
   })
   .then(()=>{
     alert('data added successfully')
   
   
   })
   .catch((err:any)=>{
     alert(err.message)
   })
}


}
