import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  img1 = "assets/optimusPrime.png";
  img2 = "assets/optimusPrimeTruck.png";

  constructor() { }

  ngOnInit() {
  }

}
