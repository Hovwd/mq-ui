import {Injectable, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchResultComponent} from './match-result/match-result.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'match', component: MatchResultComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
@Injectable({
  providedIn: 'root'
})
export class AppRoutingModule {


}
