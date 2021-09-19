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
     'suitable_for': 'F'},
    {'id': 2,
     'category': 'Birthday',
     'name': 'Personalised Diary',
     'price': 800,
     'suitable_for': 'A'},
    {'id': 3,
     'category': 'Birthday',
     'name': 'Fudge Cake',
     'price': 600,
     'suitable_for': 'A'},
      {'id': 4,
     'category': 'Festival',
     'name': 'Sweet Hamper',
     'price': 800,
     'suitable_for': 'A'},
      {'id': 5,
     'category': 'Festival',
     'name': 'Brass Diya',
     'price': 500,
     'suitable_for': 'A'},
      {'id': 6,
     'category': 'Festival',
     'name': 'Bamboo Plant',
     'price': 200,
     'suitable_for': 'A'},
      {'id': 7,
     'category': 'Anniversary',
     'name': 'Personalised Cushions',
     'price': 500,
     'suitable_for': 'M'},
      {'id': 8,
     'category': 'Anniversary',
     'name': 'Bouquet',
     'price': 300,
     'suitable_for': 'F'},
      {'id': 9,
     'category': 'Anniversary',
     'name': 'Pendent',
     'price': 400,
     'suitable_for': 'F'}
     
]     

  constructor() { }

  ngOnInit(): void {
  }

}
