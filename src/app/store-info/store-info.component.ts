import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  address = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  sname = new FormControl('', [Validators.required]);
  snumber = new FormControl('', [Validators.required]);

  constructor( ) { }

  ngOnInit(): void {
  }

}
