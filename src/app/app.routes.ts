import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { CardComponent } from './card/card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'accounts', component: AccountComponent },
  { path: 'beneficiaries', component: BeneficiaryComponent },
  { path: 'cards', component: CardComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'users', component: UserComponent },
  { path: '', redirectTo: '/accounts', pathMatch: 'full' }  // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
