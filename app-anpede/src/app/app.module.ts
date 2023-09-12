import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { EquipamentoService } from './services/domains/equipamento.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule],
    providers: [{ provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy},
      EquipamentoService],
    bootstrap: [AppComponent],

    /**
     * O "providers" é um atributo do "NgModule" que serve para declarar os serviços
     * que serão injetados em outras classes. O "providers" é um array de objetos que
     * contém a chave "provide" que é o nome do serviço e a chave "useClass" que é a
     * classe que será injetada.
     *
     * O "declarations" é um atributo do "NgModule" que serve para declarar os componentes
     * que serão utilizados no módulo. O "declarations" é um array de objetos que contém
     * a chave "declarations" que é o nome do componente. Dentro do "declarations" também
     * é possível declarar os pipes que serão utilizados no módulo.
     *
     * O "imports" é um atributo do "NgModule" que serve para declarar os módulos que serão
     * utilizados no módulo. O "imports" é um array de objetos que contém a chave "imports"
     * que é o nome do módulo.
     *
     * O ""
     */

})


export class AppModule {}
