import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import * as $ from 'jquery';

const EDITABLE_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1000" height="1000" viewBox="0 0 1000 1000" xml:space="preserve">
  <desc>Created with Fabric.js 3.5.0</desc>
  <defs>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="rgba(255,255,255,0)"/>
  <g transform="matrix(2.0292 0 0 2.0292 499.9953 499.9953)" id="123669">
  <path style="stroke: rgb(0,0,0); stroke-opacity: 0; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(103,58,183); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" transform=" translate(-224, -256)" d="M 400 480 H 48 c -26.5 0 -48 -21.5 -48 -48 V 80 c 0 -26.5 21.5 -48 48 -48 h 352 c 26.5 0 48 21.5 48 48 v 352 c 0 26.5 -21.5 48 -48 48 z M 238.1 177.9 L 102.4 313.6 l -6.3 57.1 c -0.8 7.6 5.6 14.1 13.3 13.3 l 57.1 -6.3 L 302.2 242 c 2.3 -2.3 2.3 -6.1 0 -8.5 L 246.7 178 c -2.5 -2.4 -6.3 -2.4 -8.6 -0.1 z M 345 165.1 L 314.9 135 c -9.4 -9.4 -24.6 -9.4 -33.9 0 l -23.1 23.1 c -2.3 2.3 -2.3 6.1 0 8.5 l 55.5 55.5 c 2.3 2.3 6.1 2.3 8.5 0 L 345 199 c 9.3 -9.3 9.3 -24.5 0 -33.9 z" stroke-linecap="round"/>
  </g>
  </svg>

`;

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss']
})

export class StoreViewComponent implements OnInit {

  editable : boolean = false;

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  address = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  sname = new FormControl('', [Validators.required]);
  snumber = new FormControl('', [Validators.required]);
  myForm: any;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
 
    iconRegistry.addSvgIconLiteral('editable', sanitizer.bypassSecurityTrustHtml(EDITABLE_ICON));

  }

  ngOnInit() {

  }


  // selectImage(){
  //   function readURL(input: any) {
  //     if (input.files && input.files[0]) {
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //             $('#imagePreview').css('background-image', 'url('+e.target.result +')');
  //             $('#imagePreview').hide();
  //             $('#imagePreview').fadeIn(650);
  //         }
  //         reader.readAsDataURL(input.files[0]);
  //     }
  // }
  // $("#imageUpload").change(function() {
  //     readURL(this);
  // });
  // };


}
