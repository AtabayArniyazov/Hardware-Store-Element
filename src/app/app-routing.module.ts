import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HsHomePageComponent} from "./hs-home-page/hs-home-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HsHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
