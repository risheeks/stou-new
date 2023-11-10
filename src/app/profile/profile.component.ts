import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cook } from '../model/cook/cook';
import * as sampleCook from '../../assets/test-data/cook1.json';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile!: FormGroup;
  cook: Cook = new Cook();

  ngOnInit() {
    this.initSampleCook();
    this.profile = new FormGroup({
      image: new FormControl(this.cook.image),
      firstName: new FormControl({value: this.cook.firstName, disabled: true}, Validators.required),
      lastName: new FormControl({value: this.cook.lastName, disabled: true}, Validators.required),
      description: new FormControl(this.cook.description),
      address: new FormControl(this.cook.address),
      pincode: new FormControl(this.cook.pincode, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      phone: new FormControl(this.cook.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl(this.cook.email, [Validators.required, Validators.email]),
      username: new FormControl({value: this.cook.username, disabled: true}, Validators.required)
    });
    
  }

  initSampleCook = () => {
    this.cook = sampleCook as Cook;
  }

  processFile(imageInput: HTMLInputElement) {
    console.log('image upload');
    console.log(imageInput.files ? imageInput.files[0].name : null);
  }

  onSubmit() {
    // var json = JSON.stringify(this.cook);
    // var fs = require('fs');
    // fs.writeFile('myjsonfile.json', json, 'utf8');

    console.log(this.profile.dirty);
  }
}
