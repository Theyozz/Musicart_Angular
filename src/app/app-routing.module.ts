import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListNftComponent } from './nft/list-nft/list-nft.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ListCollectionComponent } from './collection/list-collection/list-collection.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft/nft-details/nft-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'nfts', component: ListNftComponent},
  {path: 'nfts/:id', component: NftDetailsComponent},
  {path: 'collections', component: ListCollectionComponent},
  {path: 'categories', component: ListCategoryComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
