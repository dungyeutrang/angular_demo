import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppComponent}  from './app.component';
import {HeroComponent}  from './hero.component';
import {DashboardComponent}  from './dashboard.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroService}  from './hero.service';
import {AppRoutingModule}     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports: [ // other modules whose exported classes are needed by component templates declared in this module.
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
