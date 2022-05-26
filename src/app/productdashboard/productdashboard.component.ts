import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {addDoc,collection,Firestore,deleteDoc} from '@angular/fire/firestore'
import { EventEmitter } from '@angular/core';
import { doc, getDocs } from 'firebase/firestore';


@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})
export class ProductdashboardComponent implements OnInit {
 
   productData:any
   isEditClick:any
   @Input() isProductDataDisplay:number = 0;
  
  constructor(private firestore:Firestore) { }
  dataSource :MatTableDataSource<any>=new MatTableDataSource<any>();

  ngOnInit(): void {
    this.getData();
    this.isEditClick = false
    console.log(this.isProductDataDisplay)
  }
  displayedColumns: string[] = ['Name', 'Description', 'Price','prodImage','Action'];

  public changelog:any = []
  ngOnChanges(changes: SimpleChanges){
    // console.log("isProductDataDisplay"+this.isProductDataDisplay)
    // if(this.isProductDataDisplay == 1){
    //   this.getData();
    //   this.isProductDataDisplay = 0
    // }
    // for (const propName in changes) {
    //   const change = changes[propName];
    //   const to  = JSON.stringify(change.currentValue);
    //   const from = JSON.stringify(change.previousValue);
    //   const changeLog = `${propName}: changed from ${from} to ${to} `;
    //   this.changelog.push(changeLog);
    //   console.log(this.changelog)
    // }
  }
 

  public data:any = [];

   getData(){
    const dbInstance = collection(this.firestore,'user');
    getDocs(dbInstance)
    .then((response)=>{
       this.data = [...response.docs.map((item)=>{
      
       
        return {...item.data(),id:item.id}
      })]
      this.productData =this.data
      console.log(this.productData)
      this.dataSource = new MatTableDataSource<any>(this.productData)
    })
   
  }

  edit(idVal:any,ele:any){
    this.isEditClick = true
  
    console.log(idVal,ele);
    
  }

  deleteData(id:string){
    const dateToDelete= doc(this.firestore,'user',id);
    deleteDoc(dateToDelete)
    .then(()=>{
      alert('data deleted successfully')
      this.getData()
    })
    .catch((err)=>{
      alert(err.message)
    })
  }

 

}


