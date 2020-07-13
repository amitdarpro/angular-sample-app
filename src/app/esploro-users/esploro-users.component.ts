import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-esploro-users',
  templateUrl: './esploro-users.component.html',
  styleUrls: ['./esploro-users.component.css']
})
export class EsploroUsersComponent implements OnInit {

  @Input() path: string;
  @Output() success: EventEmitter<any> = new EventEmitter();
  list: Array<{id, name}>;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.path) {
      this.dataService.getData(this.path)
      .subscribe(data => {
         this.list = data;
         this.success.emit(this.list.length);
       });
    }
  }

}
