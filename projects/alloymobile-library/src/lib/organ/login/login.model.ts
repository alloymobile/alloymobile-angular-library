import { AppLink } from "../../cell/link/link.model";

export class Login{
    email: string;
    password: string;
    submitted: boolean;
    error: string;
    showSpinner: boolean;
    rememberMe: boolean;
    register: AppLink;
    forget: AppLink;
  
    static createDTO(login: Login){
      return {
          email: login.email,
          password: login.password
      };
  }
  
    constructor(response?: any){
      if(response){
        this.email = response.email ? response.email : "";
        this.password = response.password ? response.password : "";
        this.submitted = response.submitted ? response.submitted : false;
        this.error = response.error ? response.error : "";
        this.rememberMe = response.rememberMe ? response.rememberMe : false;
        this.showSpinner = response.showSpinner ? response.showSpinner : false;
        this.register = response.register ? new AppLink(response.register) : new AppLink();
        this.forget = response.forget ?  new AppLink(response.forget) : new AppLink();
      }else{
        this.email = "";
        this.password = "";
        this.submitted = false;
        this.error = "";
        this.rememberMe = false;
        this.showSpinner = false;
        this.register = new AppLink();
        this.forget = new AppLink();
      }
    }
  }
  