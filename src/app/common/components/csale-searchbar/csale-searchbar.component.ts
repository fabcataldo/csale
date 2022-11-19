import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-csale-searchbar',
  templateUrl: './csale-searchbar.component.html',
  styleUrls: ['./csale-searchbar.component.scss'],
})
export class CSaleSearchbarComponent implements OnInit {
  @Output() onSearchChange = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() searchValue: string;
  constructor() { }

  ngOnInit() {}

}
