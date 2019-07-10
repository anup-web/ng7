import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  topics = ['Angular', 'react', 'vue'];
  topicHasError = true; 
  userModel = new User('', 'anup.69ghoshal@gmail.com', 9002978645, 'default', 'morning', true);

  constructor() { }

  ngOnInit() {
  }
  
  validateTopic(value){
      if (value === 'default'){
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }

  }
  
  onSubmit() {
    //console.log(this.userModel);
   
  }

}
