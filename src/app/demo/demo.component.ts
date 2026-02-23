import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  demoForm: FormGroup;
  showForm = false;
  showSuccess = false;
  selectedProduct: string = '';

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required]
    });
  }

  // When user clicks any Request Demo button
  openForm(product: string) {
    console.log("Clicked Product:", product);   // DEBUG
    this.selectedProduct = product;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  submitDemo() {
    if (this.demoForm.valid) {

      console.log("Selected Product BEFORE submit:", this.selectedProduct);

      const demoData = {
        name: this.demoForm.value.name,
        email: this.demoForm.value.email,
        company: this.demoForm.value.company,
        product: this.selectedProduct   // IMPORTANT
      };

      console.log("Sending Data:", demoData);

      this.api.requestDemo(demoData).subscribe({
        next: (res: any) => {
          console.log("Server Response:", res);
          this.showForm = false;
          this.showSuccess = true;
          this.demoForm.reset();
        },
        error: (err: any) => {
          console.error("Demo Error:", err);
        }
      });

    } else {
      this.demoForm.markAllAsTouched();
    }
  }

  closeSuccess() {
    this.showSuccess = false;
  }
}