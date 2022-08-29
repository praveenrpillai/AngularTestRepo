import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

const routes: Routes = [
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetail', component: ProductDetailComponent },
  { path: 'customerlist', component: CustomerListComponent },
  { path: 'customerdetail', component: CustomerDetailComponent },
  { path: 'usersetting', component: UserSettingsFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingListComponent = [ProductListComponent, ProductDetailComponent, CustomerListComponent, CustomerDetailComponent
                                    , UserSettingsFormComponent
                                    ]


