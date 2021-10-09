
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {

  items = [
    {'id': 1,
     'category': 'Birthday',
     'name': 'Ladies Watch',
     'price': 300,
     'img':"assets/Images/watch.png",
     'suitable_for': 'Ladies'},
    {'id': 2,
     'category': 'Birthday',
     'name': 'Personalised Diary',
     'price': 800,
     'img':"assets/Images/diary.png",
     'suitable_for': 'All'},
    {'id': 3,
     'category': 'Birthday',
     'name': 'Fudge Cake',
     'price': 600,
     'suitable_for': 'All',
      'img':"assets/Images/Cake.png"
    },
      {'id': 4,
     'category': 'Festival',
     'name': 'Sweet Hamper',
     'price': 800,
     'img':"assets/Images/hamper.png",
     'suitable_for': 'All'},
      {'id': 5,
     'category': 'Festival',
     'name': 'Brass Diya',
     'price': 500,
     'img':"assets/Images/diya.png",
     'suitable_for': 'All'},
      {'id': 6,
     'category': 'Festival',
     'name': 'Bamboo Plant',
     'price': 200,
     'img':"assets/Images/bamboo.png",
     'suitable_for': 'All'},
      {'id': 7,
     'category': 'Anniversary',
     'name': 'Personalised Cushions',
     'price': 500,
     'img':"assets/Images/cushions.png",
     'suitable_for': 'Men'},
      {'id': 8,
     'category': 'Anniversary',
     'name': 'Bouquet',
     'price': 300,
     'img':"assets/Images/bouquet.png",
     'suitable_for': 'Ladies'},
      {'id': 9,
     'category': 'Anniversary',
     'name': 'Pendent',
     'price': 400,
     'img':"assets/Images/pendent.png",
     'suitable_for': 'Ladies'}
     ]     

  constructor() { }

  ngOnInit(): void {
  }

}
