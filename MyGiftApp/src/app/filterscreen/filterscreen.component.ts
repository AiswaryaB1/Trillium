import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filterscreen',
  templateUrl: './filterscreen.component.html',
  styleUrls: ['./filterscreen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
