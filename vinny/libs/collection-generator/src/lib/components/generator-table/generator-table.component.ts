import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss'],
})
export class GeneratorTableComponent implements OnInit {
  value = 'Clear me';
  editing = false;

  constructor() { }

  ngOnInit(): void { }

}
