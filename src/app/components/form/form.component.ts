import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  sendMessage: boolean = false;
  errorMsg: boolean = false;
  errorText: string = '';
  isSending = false;

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
  });

  onSubmit(el: HTMLElement) {
    if (this.form.invalid) return;
    console.log(this.form.invalid);
    
    console.log(this.form);
    const formData = this.form.value;
    console.log(formData, 'formData');
    this.isSending = true;
    this.http.post('/.netlify/functions/send-email', formData).subscribe({
      next: () => {
        this.sendMessage = true;
        el.click();
        this.form.reset();
        this.isSending = false;
      },
      error: (err) => {
        (this.errorText = err.message);
          (this.errorMsg = true);
          (this.isSending = false);
      },
    });
  }

  closeSuccesMsg() {
    this.sendMessage = false;
  }

  closeErrorMsg() {
    this.errorMsg = false;
    this.errorText = '';
  }
}
