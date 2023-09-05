import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';

@Component({
  selector: 'page-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(this.validatorService.firstNamePattern),
      ],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    age: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    document: ['', [Validators.required]],
    salari: ['', [Validators.required]],
    isActive: ['', [Validators.required]],
    users: this.fb.array([this.fb.control('')]),
  });

  public newForm: FormControl = new FormControl('', Validators.required);

  get users() {
    return this.myForm.get('users') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {}
  ngOnInit(): void {
    this.myForm.reset();
  }

  onAddToForm(): void {
    if (this.newForm.invalid) return;
    const newUsers = this.newForm.value;
    this.fb.control(newUsers, Validators.required);
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

  addUsers() {
    this.users.push(this.fb.control(''));
  }
}
