import { FormGroup } from "@angular/forms";

export function checkPasswords(gp: FormGroup){ 

const pass = gp.get('pass').value;
const confirmPass = gp.get('confirmPass').value;
return pass === confirmPass ? null : { notSame: true }    

}