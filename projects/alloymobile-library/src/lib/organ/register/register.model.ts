import { AppLink } from "../../cell/link/link.model";

export class Register{
    name: string;
    email: string;
    password: string;
    reTypePassword: string;
    submitted: boolean;
    error: string;
    showSpinner: boolean;
    login: AppLink;
    forget: AppLink;
  
    static createDTO(register: Register){
      return {
            name: register.name,
            email: register.email,
            password: register.password
      };
  }
  
    constructor(response?: any){
      if(response){
        this.name = response.name ?  response.name : "";
        this.email = response.email ? response.email : "";
        this.password = response.password ? response.password : "";
        this.reTypePassword = response.reTypePassword ? response.reTypePassword : "";
        this.submitted = response.submitted ? response.submitted : false;
        this.error = response.error ? response.error : "";
        this.showSpinner = response.showSpinner ? response.showSpinner : false;
        this.login = response.login ?  new AppLink(response.login) : new AppLink();
        this.forget = response.forget ?  new AppLink(response.forget) : new AppLink();
      }else{
        this.name = "";
        this.email = "";
        this.password = "";
        this.reTypePassword = "";
        this.submitted = false;
        this.error = "";
        this.showSpinner = false;
        this.login = new AppLink();
        this.forget =  new AppLink();
      }
    }
  }
