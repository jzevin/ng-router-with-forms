import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  model = {
    name: '',
    email: '',
    message: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(ref: any) {
    console.log('form submitted', ref);
  }

}
