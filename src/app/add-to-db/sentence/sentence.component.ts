import { Component, OnInit,Input} from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit {

  constructor(private service : ApiServiceService) {}

  @Input() sentence: any;

  ngOnInit(): void {
    this.sentence = this.sentence;
  }

    addSentences(){
      var val = {
       word:this.sentence
      };
      this.service.addSentence(val).subscribe(res=>{
        alert(res.toString());
      });
    }


}
