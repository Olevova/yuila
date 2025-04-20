import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);
  form:FormGroup = this.formBuilder.group({
    name:['',Validators.required, Validators.minLength(2)],
    email:['', Validators.required, Validators.email],
    phone:['']
  })

  onSubmit(el:HTMLElement){
    if (this.form.invalid) return;
    el.click()
    console.log(this.form);
    
  }
}
