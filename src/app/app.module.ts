import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerCaruselComponent } from './shared/components/banner-carusel/banner-carusel.component';
import { BestSellerComponent } from './shared/components/best-seller/best-seller.component';
import { StaticBannerComponent } from './shared/components/static-banner/static-banner.component';
import { ShippingSupportComponent } from './shared/components/shipping-support/shipping-support.component';
import { FeaturedProductsComponent } from './shared/components/featured-products/featured-products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductsCardComponent } from './shared/components/products-card/products-card.component';
import { SidebarMenuComponent } from './shared/components/sidebar-menu/sidebar-menu.component';
import { ProductFrameComponent } from './shared/components/product-frame/product-frame.component';
import { PaymentModalComponent } from './shared/components/payment-modal/payment-modal.component';
import { ContactFormComponent } from './shared/components/contact-form/contact-form.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';

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
