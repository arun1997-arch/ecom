import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProdectDetailsComponent } from './components/prodect-details/prodect-details.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'product-detail/:id',
        component:ProdectDetailsComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    }
];
