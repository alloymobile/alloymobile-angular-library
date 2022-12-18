import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faApple, faAsymmetrik, faFacebook, faGoogle, faInstagram, faLinkedin, faMicrosoft, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faAt, faBlog, faBorderAll, faCamera, faChalkboardTeacher, faDollarSign, faDownload, faEdit, faEnvelope, faEnvelopeOpenText, faHome, faIcons, faLink, faList, faLocation, faLock, faPhoneAlt, faPlus, faRightToBracket, faSearch, faSpinner, faTh, faToggleOff, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';

export class AppIcon{
  id: number;
  icon: IconDefinition;
  size: SizeProp;
  spin: boolean;
  className: string;
  constructor(res?: any){
    if(res){
      this.id = res.id ? res.id : 0;
      this.icon = res.icon ? AppIcon.getIcon(res.icon) : AppIcon.getIcon("");
      this.size = res.size ? AppIcon.getSizeProp(res.size) : AppIcon.getSizeProp("lg");
      this.spin = res.spin ? res.spin : false;
      this.className = res.className ? res.className : '';
    }else{
      this.id = 0;
      this.icon = AppIcon.getIcon("");
      this.size = AppIcon.getSizeProp("lg");
      this.spin = false;
      this.className = "";
    }

  }

  static getIcon(icon: string): IconDefinition {
    switch (icon) {
      case "faDownload":
        return faDownload;
      case "faHome":
        return faHome;
      case "faDollarSign":
        return faDollarSign;
      case "faMapMarkerAlt":
        return faLocation;
      case "faLock":
        return faLock;
      case "faUser":
        return faUser;
      case "faPhoneAlt":
        return faPhoneAlt;
      case "faEnvelope":
        return faEnvelope;
      case "faEnvelopeOpenText":
        return faEnvelopeOpenText;
      case "faAt":
        return faAt;
      case "faTh":
        return faTh;
      case "faMicrosoft":
        return faMicrosoft;
      case "faApple":
        return faApple;
      case "faGoogle":
        return faGoogle;
      case "faFacebook":
        return faFacebook;
      case "faTwitter":
        return faTwitter;
      case "faYoutube":
        return faYoutube;
      case "faLinkedin":
        return faLinkedin;
      case "faInstagram":
        return faInstagram;
      case "faEnvelope":
        return faEnvelope;
      case "faList":
        return faList;
      case "faAddressCard":
        return faAddressCard;
      case "faBorderAll":
        return faBorderAll;
      case "faSpinner":
        return faSpinner;
      case "faSearch":
        return faSearch;
      case "faPlus":
        return faPlus;
      case "faEdit":
        return faEdit;
      case "faTrashAlt":
        return faTrashAlt;
      case "faChalkboardTeacher":
        return faChalkboardTeacher;
      case "faRightToBracket":
        return faRightToBracket;  
      case "faCamera":
        return faCamera;    
      case "faBlog":
        return faBlog;   
      case "faIcons":
        return faIcons;  
      case "faLink":
        return faLink;    
      case "faToggleOff":
        return faToggleOff;                
      default:
        return faAsymmetrik;
    }
  }

  static getSizeProp(size: string): SizeProp{
    switch (size) {
      case "xs":
        return "xs";
      case "sm":
        return "sm";
      case "lg":
        return "lg";
      case "1x":
        return "1x";
      case "2x":
        return "2x";
      case "3x":
        return "3x";
      case "4x":
        return "4x";
      case "5x":
        return "5x";
      default:
        return "lg";
    }
  }
}
