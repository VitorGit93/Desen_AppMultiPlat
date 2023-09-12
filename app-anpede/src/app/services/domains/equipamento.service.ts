import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { EquipamentoDto } from "src/app/models/equipamentoDto";


@Injectable()
export class EquipamentoService {


  constructor(public http: HttpClient){}

  /* O "Observable" é um recurso do Angular que permite que a requisição seja assíncrona
    e que a resposta seja tratada quando ela chegar. */
  findAll():Observable<EquipamentoDto[]>{

    /**
     * O "http.get" é um método do Angular que faz uma requisição do tipo GET para a URL
     * que está sendo passada como parâmetro. O método retorna um "Observable" que é um
     * objeto que aguarda a resposta da requisição para então executar uma ação.
     */
    return this.http.get<EquipamentoDto[]>(`${API_CONFIG.baseURL}/equipamentos`);

  }

}
