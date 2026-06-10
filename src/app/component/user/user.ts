import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../../service/data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name!:string;
  age!:number;
  email!:string;
  address!:Address;
  hobbies: string[] = ['Cricket', 'Coding', 'Music'];
  posts!:Posts[];
  
  constructor(private dataService:Data) {
    console.log('User constructor');
  }

  ngOnInit() {
    console.log('User ngOnInit');
    this.name = 'Ajay Angular';
    this.age = 21;
    this.address = {
      city: 'New York',
      state: 'NY',
      country: 'USA'
    };
    this.hobbies = ['Reading', 'Writing', 'Coding'];
    this.email = 'ajay@gmail.com';
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts
    });
  }

  onclick(){
    this.name = "Ajay Kashyap";
    this.hobbies.push("New Hobby");
  }

  addHobby(hobby:string){
    console.log("new hobby added: " + hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(index:number){
    console.log("delete Hobby" + index);
    for (let i = 0; i < this.hobbies.length; i++) {
      if(i == index)
      this.hobbies.splice(i, 1);
    }
  }

  ngOnDestroy() {
    console.log('User ngOnDestroy');
  }
}

interface Address {
  city: string;
  state: string;
  country: string;
}
interface Posts {
  id:number,
  title:string,
  body:string,
  userId:string
}