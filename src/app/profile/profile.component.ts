import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cook } from '../model/cook/cook';
import { CookService } from '../service/cook.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() username!: string;
  profile!: FormGroup;
  cook: Cook = new Cook();
  

  constructor(private cookService: CookService) {}

  ngOnInit() {
    this.initCook(this.username);
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

  initCook = (username: string) => {
    // this.cook = this.cookService.getCook(username);
  }

  processFile() {
    // console.log('image upload');
    // console.log(imageInput.files ? imageInput.files[0].name : null);
    console.log(this.profile.get('image')?.value);
  }

  onSubmit() {
    const json = JSON.stringify(this.cook);
    const blob = 
        new Blob([
                 json], 
                 {type: "text/plain;charset=utf-8"});
    saveAs(blob, "JoeGoldberg.json");
    
    console.log(json);
    console.log(this.profile.dirty);
  }
}
