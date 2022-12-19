import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppIcon } from '../../cell/icon/icon.model';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  _login: Login = new Login();
  loginForm: FormGroup;
  loadingIcon = new AppIcon({id:5,icon:"faSpinner",size:"lg",spin:false,className:""});
  @Input() set login(login: Login){
    this._login = login;
  };

  @Output() output: EventEmitter<Login> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginClient(){
    if (this.loginForm.valid) {
      this._login.error ="";
      this._login.email = this.formControl.email.value;
      this._login.password = this.formControl.password.value;
      this.loadingIcon.spin = true;
      this.output.emit(this._login);
    }else{
      this._login.error = "There are form errors please fix them"
      this._login.submitted = false;
    }
  }
}
