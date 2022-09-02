import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: AbstractControl) => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
      if (matchingControl?.errors && !matchingControl.errors['confirmedValidator']) {
          return;
      }
      if (control?.value !== matchingControl?.value) {
          matchingControl?.setErrors({ confirmedValidator: true });
      } else {
          matchingControl?.setErrors(null);
      }
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // TODO: fix deprecation warning
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validator: ConfirmedValidator('password', 'confirmPassword') });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm);
  }

}
