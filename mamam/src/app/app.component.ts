import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Datajson} from "./datajson";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";
    public myForm: FormGroup;
    
    constructor() {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      no_hp: new FormControl(''),
      exDate: new FormControl(''),
      msTenggang: new FormControl(''),
      name: new FormControl(''),
      kota: new FormControl(''),
      tLahir: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl(''),
      fb_url: new FormControl(''),
      fb_friend: new FormControl(''),
      tw_url: new FormControl(''),
      tw_foll: new FormControl(''),
      insta_url: new FormControl(''),
      insta_foll: new FormControl(''),
      ip_add: new FormControl(''),
      mac_add: new FormControl(''),
      
    });
    }

    ngOnInit(): void {
      this.data = Datajson;
      // console.log(this.data.length);
      
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.kota.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        var agree = confirm("Are you sure you want to delete this user?");
        if(agree && index>-1) {
            this.data.splice(index, 1);
            alert("success");
        } else {
          return false;
        }
    }
    Added(){
   
    let formValue = this.myForm.getRawValue();
    //  console.log(this.myForm.getRawValue());
    this.data.push({
      id: formValue.id,
      no_hp: formValue.no_hp,
      exDate: formValue.exDate,
      msTenggang: formValue.msTenggang,
      name: formValue.name,
      kota: formValue.kota,
      tLahir: formValue.tLahir,
      email: formValue. email,
      pass: formValue.pass,
      fb_url: formValue.fb_url,
      fb_friend: formValue.fb_friend,
      tw_url: formValue.tw_url,
      tw_foll: formValue.tw_foll,
      insta_url: formValue.insta_url,
      insta_foll: formValue.insta_foll,
      ip_add: formValue.ip_add,
      mac_add: formValue.mac_add
    });
    alert("add success");
    this.myForm.reset();
  }
  Edit(formData){
    // console.log(formData);
    this.myForm.controls['id'].setValue(formData.id);
    this.myForm.controls['no_hp'].setValue(formData.no_hp);
    this.myForm.controls['exDate'].setValue(formData.exDate);
    this.myForm.controls['msTenggang'].setValue(formData.msTenggang);
    this.myForm.controls['name'].setValue(formData.name);
    this.myForm.controls['tLahir'].setValue(formData.tLahir);
    this.myForm.controls['kota'].setValue(formData.kota);
    this.myForm.controls['email'].setValue(formData.email);
    this.myForm.controls['pass'].setValue(formData.pass);
    this.myForm.controls['fb_url'].setValue(formData.fb_url);
    this.myForm.controls['fb_friend'].setValue(formData.fb_friend);
    this.myForm.controls['tw_url'].setValue(formData.tw_url);
    this.myForm.controls['tw_foll'].setValue(formData.tw_foll);
    this.myForm.controls['insta_url'].setValue(formData.insta_url);
    this.myForm.controls['insta_foll'].setValue(formData.insta_foll);
    this.myForm.controls['ip_add'].setValue(formData.ip_add);
    this.myForm.controls['mac_add'].setValue(formData.mac_add);
  }

  Update(){
    let formValue = this.myForm.getRawValue();
    let index = this.data.findIndex(data => data.id == formValue.id);
    
    this.data[index].id = formValue.id;
    this.data[index].no_hp = formValue.no_hp;
    this.data[index].exDate = formValue.exDate;
    this.data[index].msTenggang = formValue.msTenggang;
    this.data[index].name = formValue.name;
    this.data[index].kota = formValue.kota;
    this.data[index].tLahir = formValue.tLahir;
    this.data[index].email = formValue.email;
    this.data[index].pass = formValue.pass;
    this.data[index].fb_url = formValue.fb_url;
    this.data[index].fb_friend = formValue.fb_friend;
    this.data[index].tw_url = formValue.tw_url;
    this.data[index].tw_foll = formValue.tw_foll;
    this.data[index].insta_url = formValue.insta_url;
    this.data[index].insta_foll = formValue.insta_foll;
    this.data[index].ip_add = formValue.ip_add;
    this.data[index].mac_add = formValue.mac_add;
    this.myForm.reset(); 
  }
}