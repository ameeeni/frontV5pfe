import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Doc} from "./doc";
import {FileService} from "./file.service";
import {ClientProService} from "../client-professionnel/client-pro.service";
import {ClientPro} from "../client-professionnel/client-pro";
import {Compte} from "../choisir-votre-compte/Compte";


@Component({
  selector: 'app-documents-perso',
  templateUrl: './documents-perso.page.html',
  styleUrls: ['./documents-perso.page.scss'],
})
export class DocumentsPersoPage implements OnInit {
  doc= new Doc();
  documentsForm !: FormGroup;
  filesList: File[] = [];
  client1 : any;
  email :any   ;
  listeDesComptes !:Compte ;
  compte !:Compte
  client = new ClientPro();

  constructor( private fb : FormBuilder , private fileService : FileService , private clientProService: ClientProService) {
  }

  ngOnInit() {
    this.documentsForm = this.fb.group({
      // carteRecto: this.fb.control(''),
      // carteVerso: this.fb.control(''),
      // justRev: this.fb.control(''),
      // justCp: this.fb.control(''),
      // justAdresse: this.fb.control('')
      files: [[]]
    });

    this.email =window.localStorage.getItem("email");
    this.getClient() ;
  }


  getClient () {

    this.clientProService.getClientByEmail(this.email).subscribe(
      (client : ClientPro)=>{
        this.client=client;
        this.listeDesComptes = client.listeDesComptes[0] || Compte;

        console.log("***********" +this.compte);
        console.log('Data:', client);
        console.log('listeDesComptes:', this.listeDesComptes);
      } ,(error) => {
        console.error('Error:', error);
      }
    )
  }


  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
  }

//   onFileChange($event :any) {
//     const file: File = $event.target.files?.[0];
//     const fileArray: File[] = [];
//
//       for (let i = 0; i < fileArray.length; i++) {
//         fileArray.push(fileArray[i]);
//         console.log(fileArray);
//
//     }
//     const filesFormControl = this.documentsForm.get('files');
//     if (filesFormControl) {
//       filesFormControl.setValue(fileArray);
//     }
//     this.fileService.saveFiles(fileArray);
//   }
//   saveFile() {
//     const files: File[] = this.documentsForm.get('files')?.value;
//     this.fileService.saveFiles(files);
//   }

  onFileChange($event: any)  {
    const files: FileList = $event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.filesList.push(files[i]);
        console.log(this.filesList);


      }
    }
  }
  saveFile ():any{
    console.log(this.filesList.length);
    for (let i = 0; i < this.filesList.length; i++)

    this.fileService.saveFiles(this.filesList[i],this.listeDesComptes.id_compte).subscribe( data =>{
      console.log(data) ;
      console.log(  this.listeDesComptes.id_compte)
 ;    })


  }
}
