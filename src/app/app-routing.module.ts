import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
// import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'', component:ProductlistComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'signin', component:LoginComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'addtocart',component:AddtocartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
