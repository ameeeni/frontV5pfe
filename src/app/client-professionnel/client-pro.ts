import {Compte} from "../choisir-votre-compte/Compte";

export class ClientPro {
  nom !:  string;
  prenom !:  string;
  email !:  string;
  mot_de_passe !:  string;
  phone!:string;
 adresse!:string;


  listeDesComptes !: Compte[];
  id_account!: number;
  id_client !:number;
  constructor() {

  }

}
