import { Component, OnInit, ViewEncapsulation} from '@angular/core';

// encapsulation: ViewEncapsulation.None
// ViewEncapsulation.Emulated
// ViewEncapsulation.Native

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
