import { Component, inject, OnInit } from '@angular/core';
import { SEO_CONTACT } from '../../seo/seo.config';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  // private seoService = inject(SeoService);
  sendMessage: boolean = false;
  errorMsg: boolean = false;
  errorText: string = '';
  isSending = false;

 ngOnInit(){
  //  this.seoService.updateTags(SEO_CONTACT);
  //  this.seoService.setCanonicalLink();
}

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message:['', [Validators.maxLength(250)]]
  });

  onSubmit(el: HTMLElement) {
    console.log(this.form.controls['name'].hasError('required'), this.form.controls);
    
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
