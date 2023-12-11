import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  private _loginForm: FormGroup | undefined;

  get loginForm(): FormGroup | undefined {
    return this._loginForm;
  }

  set loginForm(value: FormGroup | undefined) {
    this._loginForm = value;
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      contactName: this._formBuilder.control('', [Validators.required]),
      email: this._formBuilder.control('', [Validators.email]),
      tel: this._formBuilder.control('', [Validators.pattern('^[0-9]{10}$'),Validators.required],)
    });
    console.log(this._loginForm)
  }
  onSubmit() {
    console.log(this._loginForm);
  }
}
