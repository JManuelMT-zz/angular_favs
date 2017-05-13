import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {FavListComponent} from "./components/fav-list/fav-list.component";
import { FavDetailComponent } from "./components/fav-detail/fav-detail.component";
import { AddFavComponent } from "./components/add-fav/add-fav.component";
import { EditFavComponent } from "./components/edit-fav/edit-fav.component";

// dos ** es ruta no encontrada
const appRoutes: Routes=[
    {path: '', component: FavListComponent},
    {path: 'favdetail/:id', component: FavDetailComponent},
    {path: 'add_fav', component: AddFavComponent},
    {path: 'edit_fav/:id', component: EditFavComponent},
    {path: '**', component: FavListComponent}
]


export const AppRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

