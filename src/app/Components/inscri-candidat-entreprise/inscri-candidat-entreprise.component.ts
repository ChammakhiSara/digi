import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { NOMEM } from 'node:dns';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { checkPasswords } from 'src/app/utils/confirmPass.validator';



@Component({
  selector: 'app-inscri-candidat-entreprise',
  templateUrl: './inscri-candidat-entreprise.component.html',
  styleUrls: ['./inscri-candidat-entreprise.component.css']
})
export class InscriCandidatEntrepriseComponent implements OnInit {
  
  // entrepriseForm : FormGroup;
  // candidatForm : FormGroup;

  // submitted for candidat
  submitted= false;

  // submitted for entreprise
  submittedEnt= false;
  countries= ['Afrique du Sud','Afghanistan','Albanie','Algérie','Allemagne','Andorre','Angola','Antigua-et-Barbuda','Arabie Saoudite',
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
 
  
  
  constructor(private authenticationService : AuthenticationService) { }

    // initialisation des inputs du formulaire Candidat
      candidatForm= new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
     // pays: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country : new FormControl('' , [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/)]),
      confirmPass: new FormControl('', [Validators.required]) 
    },
    {
      validators : checkPasswords
    });
  
    // initialisation des inputs du formulaire Entreprise
      entrepriseForm= new FormGroup({
      raisonSociale: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
     // pays: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('' , [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/)]),
      confirmPass: new FormControl('', [Validators.required])  
    },
    {
      validators : checkPasswords
    });

  ngOnInit(): void {
 
  }
  
  //methode d'ajout du compte candidat
  ajoutCandidat(){
    console.log(this.candidatForm.hasError('notSame'));
    this.submitted= true;
    if (this.candidatForm.invalid){
       return;
     } else {
      let  email = this.candidatForm.get("email").value;
      let password = this.candidatForm.get("pass").value;
      let nom = this.candidatForm.get("nom").value;
      let prenom = this.candidatForm.get("prenom").value;
      let telephone = this.candidatForm.get("telephone").value;
      let pays = this.candidatForm.get("country").value;
      let sexe = this.candidatForm.get("gender").value;
   
      console.log(email,password);
       let registerRequest ={
         email : email,
         password : password,
         nom : nom,
         prenom : prenom ,
         telephone : telephone,
         pays : pays,
         sexe : sexe
       }
       let res = this.authenticationService.registerCandidat(registerRequest);
       res.subscribe();  
     }
   
  }


  
  //methode d'ajout du compte entreprise
  ajoutEntreprise(){
     this.submittedEnt= true;
     if (this.entrepriseForm.invalid){
       return;
     }else{
        
        let  email = this.entrepriseForm.get("email").value;
        let password = this.entrepriseForm.get("pass").value;
        let raisonSociale = this.entrepriseForm.get("raisonSociale").value;
        let telephone = this.entrepriseForm.get("telephone").value;
        let pays = this.entrepriseForm.get("country").value;

        console.log(email,password);
        
        let registerRequest ={
          email : email,
          password : password,
          raisonSociale : raisonSociale,
          telephone : telephone,
          pays : pays
          
        }
        let res = this.authenticationService.registerEntreprise(registerRequest);
        res.subscribe();  
      }

  }
    
}
