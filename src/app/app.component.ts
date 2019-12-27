import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  subs = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'advanced';
  submitted = false;
  data = {
    mail: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    this.data.mail = this.signupForm.value.email;
    this.data.subscription = this.signupForm.value.subs;
    this.data.password = this.signupForm.value.password;
    console.log(this.data);
  }
}
