import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfilEntrepriseService } from 'src/app/Services/Entreprise/profil-entreprise.service';
import { checkPasswords } from 'src/app/utils/confirmPass.validator';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilEntreprise implements OnInit {

  submitted: boolean = false;
  profil : any;

  countries = ['Afrique du Sud','Afghanistan','Albanie','Algérie','Allemagne','Andorre','Angola','Antigua-et-Barbuda','Arabie Saoudite',
  'Argentine','Arménie','Australie','Autriche','Azerbaïdjan','Bahamas','Bahreïn','Bangladesh','Barbade','Belgique','Belize','Bénin','Bhoutan',
  'Biélorussie','Birmanie','Bolivie','Bosnie-Herzégovine','Botswana','Brésil','Brunei','Bulgarie','Burkina Faso','Burundi','Cambodge','Cameroun',
  'Canada','Cap-Vert','Chili','Chine','Chypre','Colombie','Comores','Corée du Nord','Corée du Sud','Costa Rica','Côte d’Ivoire','Croatie','Cuba',
  'Danemark','Djibouti','Dominique','Égypte	','Émirats arabes unis','Équateur','Érythrée','Espagne','Eswatini','Estonie','États-Unis','Éthiopie',
  'Fidji','Finlande','France','Gabon','Gambie','Géorgie','Ghana','Grèce','Grenade','Guatemala','Guinée','Guinée équatoriale','Guinée-Bissau',
  'Guyana','Haïti','Honduras','Hongrie','Îles Cook','Îles Marshall','Inde','Indonésie','Irak','Iran','Irlande','Islande','Italie','Jamaïque',
  'Japon','Jordanie','Kazakhstan','Kenya','Kirghizistan','Kiribati','Koweït','Laos','Lesotho','Lettonie','Liban','Liberia','Libye',
  'Liechtenstein','Lituanie','Luxembourg','Macédoine','Madagascar','Malaisie','Malawi','Maldives','Mali','Malte','Maroc','Maurice','Mauritanie',
  'Mexique','Micronésie','Moldavie','Monaco','Mongolie','Monténégro','Mozambique','Namibie','Nauru','Népal','Nicaragua','Niger','Nigeria',
  'Niue','Norvège','Nouvelle-Zélande','Oman','Ouganda','Ouzbékistan','Pakistan','Palaos','Palestine','Panama','Papouasie-Nouvelle-Guinée',
  'Paraguay','Pays-Bas','Pérou','Philippines','Pologne','Portugal','Qatar','République','République démocratique du Congo','République Dominicaine',
  'République du Congo','République tchèque','Roumanie','Royaume-Uni','Russie','Rwanda','Saint-Kitts-et-Nevis','Saint-Vincent-et-les-Grenadines',
  'Sainte-Lucie','Saint-Marin','Salomon','Salvador','Samoa','São Tomé-et-Principe','Sénégal','Serbie','Seychelles','Sierra Leone','Singapour','Slovaquie',
  'Slovénie','Somalie','Soudan','Soudan du Sud','Sri Lanka','Suède','Suisse','Suriname','Syrie','Tadjikistan','Tanzanie','Tchad','Thaïlande',
  'Timor oriental','Togo','Tonga','Trinité-et-Tobago','Tunisie','Turkménistan','Turquie','Tuvalu','Ukraine','Uruguay','Vanuatu','Vatican','Venezuela',
  'Viêt Nam','Yémen','Zambie','Zimbabwe'];

  constructor(private entrepriseService : ProfilEntrepriseService) { }
  
  // initialisation des inputs du formulaire modification Entreprise
  modifEntrepriseForm= new FormGroup({
    responsable: new FormControl('', [Validators.required]),
    raisonSociale: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    pays: new FormControl('' , [Validators.required]),
    taille: new FormControl('', [Validators.required]),
    activite: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required])   
  });

  // initialisation des inputs du formulaire modification compte Entreprise
  modifForm= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    ancienPass: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/)]),
    confirmPass: new FormControl('', [Validators.required])  
    },
    {
      validators : checkPasswords
    });
    
  ngOnInit(): void {
    let res = this.entrepriseService.getEntrepriseByEmail();
    res.subscribe((data)=>{
      this.profil = data ;
      console.log(this.profil);
     // alert(JSON.stringify(data.email));
      
    });
  }

  modifEntreprise(){
    this.submitted= true;
    if (this.modifEntrepriseForm.invalid){
      return;
    }else{
      let entreprise  = this.modifEntrepriseForm.value;
      console.log(entreprise);
      let res = this.entrepriseService.modifDataEntreprise(entreprise);
      res.subscribe();
      window.location.reload();

      
    }
  }
  modifConfidEntreprise(){
    let email = this.modifForm.get("email").value;
    let password = this.modifForm.get("pass").value;
    let  entreprise = {
     email : email,
     password : password

    }
    let res = this.entrepriseService.modifConfidDataEntreprise(entreprise);
    res.subscribe();
    
   
  }
  

}
