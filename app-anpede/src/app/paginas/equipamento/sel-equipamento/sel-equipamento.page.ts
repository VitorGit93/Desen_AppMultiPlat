import { Component, OnInit } from '@angular/core';
import { EquipamentoDto } from 'src/app/models/equipamentoDto';
import { EquipamentoService } from 'src/app/services/domains/equipamento.service';

@Component({
  selector: 'app-sel-equipamento',
  templateUrl: './sel-equipamento.page.html',
  styleUrls: ['./sel-equipamento.page.scss'],
})
export class SelEquipamentoPage implements OnInit {

  equipamentos!: EquipamentoDto[];

  constructor(public equipamentoService: EquipamentoService) {}

  ionViewDidEnter() {

    /**
     * O "subscribe" é um método do "Observable" que recebe uma função como parâmetro.
     * Essa função é executada quando a resposta da requisição chega. A resposta da
     * requisição é passada como parâmetro para a função. Nesse caso, a resposta é
     * um array de "EquipamentoDto". No entanto ela está depreciada, e como alternativa
     * é possível usar o "response" que é um objeto do tipo "HttpResponse" que contém
     * a resposta da requisição.
     */

    this.equipamentoService.findAll().subscribe(
      (response) => {
        this.equipamentos = response;
        // console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
