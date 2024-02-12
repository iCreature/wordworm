import { Component, OnInit,Input} from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-retrieve-from-db',
  templateUrl: './retrieve-from-db.component.html',
  styleUrls: ['./retrieve-from-db.component.scss']
})
export class RetrieveFromDbComponent implements OnInit{
  constructor (private service : ApiServiceService){}

  NounsList : any = [];
  VerbsList : any = [];
  AdverbsList : any = [];
  PrepositionsList : any = [];
  SentencesList : any = [];
  ExclamationsList : any = [];
  ConjunctionsList : any = [];
  DeterminersList : any = [];
  AdjectivesList : any = [];

  @Input() sentence: any;
  
 ngOnInit(): void {
   this.refreshSentencesList(); 
   this.refreshNounsList();
   this.refreshAdverbsList();
   this.refreshVerbsList();
   this.refreshAdverbsList();
   this.refreshDeterminersList();
   this.refreshPrepositionsList();
   this.refreshConjunctionsList();
   this.refreshExclamationsList();
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

 refreshSentencesList() {
   this.service.getSentences().subscribe(data=>{
     this.SentencesList = data;
   })
 }

 refreshNounsList() {
   this.service.getNouns().subscribe(data => {
     this.NounsList = data;
   });
 }

 refreshVerbsList() {
   this.service.getVerbs().subscribe(data => {
     this.VerbsList = data;
   });
 }

 refreshAdverbsList() {
   this.service.getAdVerbs().subscribe(data => {
     this.AdverbsList = data;
   });
 }

 refreshExclamationsList () {
   this.service.getExclamation().subscribe(data => {
     this.ExclamationsList = data;
   });
 }

 refreshConjunctionsList() {
   this.service.getConjunctions().subscribe(data => {
     this.ConjunctionsList = data;
   });
 }

 refreshDeterminersList(){
   this.service.getDeterminer().subscribe(data => {
     this.DeterminersList = data;
   });
 }

 refreshPrepositionsList(){
   this.service.getPrepositions().subscribe(data => {
     this.PrepositionsList = data;
   });
 }
}
