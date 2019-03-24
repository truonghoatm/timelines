import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor( public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
