import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';   // ✅ Added

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  showPopup = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService   // ✅ Added
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {

      // ✅ Store in backend
      this.api.sendContact(this.contactForm.value).subscribe({
        next: () => {
          this.showPopup = true;   // 👈 SAME OLD POPUP LOGIC
          this.contactForm.reset();
        },
        error: (err: any) => {
          console.error("Backend Error:", err);
        }
      });

    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}