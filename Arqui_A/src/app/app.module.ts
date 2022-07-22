import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EsloganComponent } from './eslogan/eslogan.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AnexosComponent } from './anexos/anexos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EsloganComponent,
    InformacionComponent,
    ProyectosComponent,
    CategoriasComponent,
    AnexosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
