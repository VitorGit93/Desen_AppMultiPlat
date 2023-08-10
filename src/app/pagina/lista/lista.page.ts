import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  nome = "Optimus Prime";
  avatar = "assets/optimusPrime.png";


  personagens = [
    {
      nome: "Optimus Prime",
      avatar: "assets/optimusPrime.png",
      forma: "Robô"
    },
    {
      nome: "Optimus Prime Truck",
      avatar: "assets/optimusPrimeTruck.png",
      forma: "Caminhão"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
