import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shopie-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() shoppingCartLength: number;

  constructor() { }

  ngOnInit() {
  }

}
