import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home teste', url: '/home', icon: 'Home' },
    { title: 'Botões', url: '/button', icon: 'radio-button-on' },
    { title: 'Listas', url: '/lista', icon: 'list' },
    { title: 'Cadastro', url: '/cadastro', icon: 'person' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
