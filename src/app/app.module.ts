import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNftComponent } from './nft/add-nft/add-nft.component';
import { ListNftComponent } from './nft/list-nft/list-nft.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCollectionComponent } from './collection/add-collection/add-collection.component';
import { ListCollectionComponent } from './collection/list-collection/list-collection.component';
import { TemplateComponent } from './template/template.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft/nft-details/nft-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNftComponent,
    ListNftComponent,
    AddUserComponent,
    ListUserComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    AddCollectionComponent,
    ListCollectionComponent,
    TemplateComponent,
    UserDetailsComponent,
    NavbarComponent,
    HomeComponent,
    NftDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
