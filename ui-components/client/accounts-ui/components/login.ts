///<reference path="../typings/typings.d.ts"/>
import {Component, View} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'accounts-login'
})
@View({
  templateUrl: 'client/accounts-ui/components/login.ng.html',
  directives: [formDirectives],
  styleUrls: ['client/accounts-ui/styles/accounts-ui.css']
})
export class AccountsLogin {
  accountsForm:ControlGroup;

  constructor() {

    this.accountsForm = new ControlGroup({
      username: new Control(''),
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  /**
   * Submit: Login
   * @param event {browser $event}
   * @param form {username, email, password}
   */
  submit(event, form:IAccountCredentials) {
    // prevent page reload on enter
    event.preventDefault();

    console.log(form.value);

    // Form is valid ?
    if (this.accountsForm.valid) {

      // Submit using Accounts-ui-service.ts
      //AccountsUiService['login'](form.value);

      // reset fields to empty strings
      for (var key in form) {
        form[key] = '';
      }
    }
  }
}