import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);

  form:FormGroup = this.formBuilder.group({
    name:['',Validators.required, Validators.minLength(2)],
    email:['', Validators.required, Validators.email],
    phone:['']
  })

  onSubmit(el:HTMLElement){
    if (this.form.invalid) return;
    el.click();
    console.log(this.form);
    const formData = this.form.value
    this.http.post('/.netlify/functions/send-email', formData).subscribe({
      next: () => alert('Лист надіслано!'),
      error: (err) => alert('Помилка при надсиланні: ' + err.message)
    });
    
  }
}
