import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(public jservicie : JournalService ) { }

  ngOnInit() {
    this.entries = this.jservicie.getList()
  }

}
