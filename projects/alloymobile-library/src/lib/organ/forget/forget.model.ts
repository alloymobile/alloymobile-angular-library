import { AppLink } from "../../cell/link/link.model";

export class Forget{
    email: string;
    submitted: boolean;
    error: string;
    showSpinner: boolean;
    login: AppLink;
    register: AppLink;
  
    static createDTO(forget: Forget){
      return {
          email: forget.email
      };
  }
  
    constructor(response?: any){
      if(response){
        this.email = response.email ? response.email : "";
        this.submitted = response.submitted ? response.submitted : false;
        this.error = response.error ? response.error : "";
        this.showSpinner = response.showSpinner ? response.showSpinner : false;
        this.login = response.login ?  new AppLink(response.login) : new AppLink();
        this.register = response.register ?  new AppLink(response.register) : new AppLink();
      }else{
        this.email = "";
        this.submitted = false;
        this.error = "";
        this.showSpinner = false;
        this.login = new AppLink();
        this.register =  new AppLink();
      }
    }
  }
  