import {ClientPro} from "../client-professionnel/client-pro";
import {ClientPar} from "../client-particulier/client-par";

export class CompteProfessionnel {
  id_compte !: any;
 date_de_creation !: any;
  solde !: any;
  débit !:any;
  clientPro !: ClientPro;
  clientPar !:ClientPar;
  constructor() {
  }
}
