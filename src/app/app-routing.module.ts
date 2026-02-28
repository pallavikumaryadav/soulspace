import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoodsComponent } from './moods/moods.component';

const routes: Routes = [
   { path: '', component: WelcomeComponent },
  { path: 'moods', component: MoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { 

}
