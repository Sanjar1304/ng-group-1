import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './mains/header/header.component';
import { BannerCaruselComponent } from './mains/banner-carusel/banner-carusel.component';
import { BestSellerComponent } from './mains/best-seller/best-seller.component';
import { StaticBannerComponent } from './mains/static-banner/static-banner.component';
import { ShippingSupportComponent } from './mains/shipping-support/shipping-support.component';
import { FeaturedProductsComponent } from './mains/featured-products/featured-products.component';
import { FooterComponent } from './mains/footer/footer.component';
import { CartComponent } from './mains/cart/cart.component';
import { ProductsCardComponent } from './mains/products-card/products-card.component';
import { SidebarMenuComponent } from './mains/sidebar-menu/sidebar-menu.component';
import { ProductFrameComponent } from './mains/product-frame/product-frame.component';
import { PaymentModalComponent } from './mains/payment-modal/payment-modal.component';
import { ContactFormComponent } from './mains/contact-form/contact-form.component';
import { LoginComponent } from './mains/login/login.component';
import { SignupComponent } from './mains/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerCaruselComponent,
    BestSellerComponent,
    StaticBannerComponent,
    ShippingSupportComponent,
    FeaturedProductsComponent,
    FooterComponent,
    CartComponent,
    ProductsCardComponent,
    SidebarMenuComponent,
    ProductFrameComponent,
    PaymentModalComponent,
    ContactFormComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
