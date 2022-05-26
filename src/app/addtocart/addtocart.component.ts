import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {addDoc,collection,Firestore,deleteDoc} from '@angular/fire/firestore'
import { doc, getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private _activateRoute:ActivatedRoute,private firestore:Firestore) { }
  public productId:any
  public data:any = []
  public cartData:any = []
  public displayCartData:any = []
  public showCartData:any = []

  ngOnInit(): void {
    this.productId = this._activateRoute.snapshot.paramMap.get("id")
    this.showCartDetail()
  
   
  }

  // getProductData(){
    
  //   const dbInstance = collection(this.firestore,'user');
  //   getDocs(dbInstance)
  //   .then((response)=>{
  //      this.data = [...response.docs.map((item)=>{
      
       
  //       return {...item.data(),id:item.id}
  //     })]
  //     for(let i = 0;i<this.data.length;i++){
       
  //       if(this.data[i].id === this.productId){
  //          this.cartData = this.data[i]
  //          console.log("cart data",this.cartData)
  //       }
  //     }
  //    console.log(this.data)
   
  //   })
     
  // }

  
  
  showCartDetail(){
   
    
      const dbInstance = collection(this.firestore,'productCart');
      getDocs(dbInstance)
      .then((response)=>{
         this.showCartData = [...response.docs.map((item)=>{
        
         
          return {...item.data(),id:item.id}
        })]
         console.log("showcartdata"+this.showCartData)
      
      })
       
    
  }

  deleteCartData(id:string){
    console.log(id)
    const dateToDelete= doc(this.firestore,'productCart',id);
    deleteDoc(dateToDelete)
    .then(()=>{
      alert('data deleted successfully')
      this.showCartDetail()
    })
    .catch((err)=>{
      alert(err.message)
    })
  }

}
