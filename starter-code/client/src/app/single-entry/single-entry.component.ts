import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry;
  constructor(
      private router:Router,
      private route:ActivatedRoute,
      private journalService: JournalService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(`El parametro recibido es: ${params['id']}`);
     this.getEntry(params['id'])
   });
  }

  getEntry(id){
    this.journalService.get(id).subscribe((entry) => {
      this.entry = entry
    })
  }

}
