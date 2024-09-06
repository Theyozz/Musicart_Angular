import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListNftComponent } from './nft/list-nft/list-nft.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ListCollectionComponent } from './collection/list-collection/list-collection.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft/nft-details/nft-details.component';
import { CollectionDetailsComponent } from './collection/collection-details/collection-details.component';
import { LoginComponent } from './login/login.component';
import { AddNftComponent } from './nft/add-nft/add-nft.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';
import { LegaleMentionsComponent } from './legale-mentions/legale-mentions.component';
import { CguComponent } from './cgu/cgu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users/create', component: AddUserComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'nfts/create', component: AddNftComponent },
  { path: 'nfts', component: ListNftComponent },
  { path: 'nfts/:id', component: NftDetailsComponent },
  { path: 'collections', component: ListCollectionComponent },
  { path: 'collections/:id', component: CollectionDetailsComponent },
  { path: 'categories', component: ListCategoryComponent },
  { path: 'privacy', component: ConfidentialityComponent },
  { path: 'propos', component: LegaleMentionsComponent },
  { path: 'cgu', component: CguComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
