import { Component, OnInit,Input} from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent implements OnInit {

  SentencesList : any = [];

  constructor (private service : ApiServiceService){}

  ngOnInit(): void {
    this.refreshSentencesList();
  }

  refreshSentencesList() {
    this.service.getSentences().subscribe(data=>{
      this.SentencesList = data;
    })
  }

}
