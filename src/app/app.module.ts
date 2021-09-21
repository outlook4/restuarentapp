import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import{HttpClientModule} from'@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemComponent } from './orders/order-item/order-item.component';
import { OrderService } from './shared/order.service';
 


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemComponent, 
     
  ],
  imports: [
    BrowserModule,
    MatIconModule ,
    AppRoutingModule,FormsModule ,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  entryComponents:[OrderItemComponent],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
