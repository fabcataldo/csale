import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csale-grid-cards',
  templateUrl: './csale-grid-cards.component.html',
  styleUrls: ['./csale-grid-cards.component.scss'],
})
export class CSaleGridCardsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goToCardPage(tag) {
    this.router.navigate([`/special-tabs/grid-cards-page/${tag}`]);
  }

}
