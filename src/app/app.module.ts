import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import{AppRoutingProviders, routing} from './app.routing';

import { AppComponent } from './app.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { FavDetailComponent } from './components/fav-detail/fav-detail.component';
import { AddFavComponent } from './components/add-fav/add-fav.component';
import { EditFavComponent } from './components/edit-fav/edit-fav.component';

@NgModule({
  declarations: [
    AppComponent,
    FavListComponent,
    FavDetailComponent,
    AddFavComponent,
    EditFavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
