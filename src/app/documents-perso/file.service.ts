import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor( private  http: HttpClient) { }
  saveFiles(files: File , idCompte: number) {
    const data: FormData = new FormData();
    data.append('file', files);
    console.log(files);
    return this.http.post("http://vps95761.serveur-vps.net:8080/uploadproductimage/"+ idCompte , data);
  }
}
