import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-csale-searchbar',
  templateUrl: './csale-searchbar.component.html',
  styleUrls: ['./csale-searchbar.component.scss'],
})
export class CSaleSearchbarComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

}
