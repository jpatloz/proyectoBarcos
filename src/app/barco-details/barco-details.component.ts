import { Component, OnInit, Input } from '@angular/core';
import { Barcos } from '../interface/barcos';

@Component({
  selector: 'app-barco-details',
  templateUrl: './barco-details.component.html',
  styleUrls: ['./barco-details.component.css']
})
export class BarcoDetailsComponent implements OnInit {
  @Input() barco?: Barcos;
  constructor() { }

  ngOnInit(): void {
  }

}
