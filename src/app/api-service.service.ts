import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  readonly APIUrl = " https://eps0xry1i0.execute-api.eu-west-1.amazonaws.com/default/wordworm-lambda"

  constructor(private http: HttpClient) { }

  //get sentences 
  getSentences() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/sentences')
  }
  
  /**
   * Get wordTypes
   */

  getVerbs() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/verbs')
  }

  getNouns() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/nouns')
  }

  getPrepositions() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/prepositions')
  }

  getAdjectives() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/adjectives')
  }

  getConjunctions() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/conjunctions')
  }

  getDeterminer() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/determiner')
  }

  getExclamation() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/exclamation')
  }

  getAdVerbs() : Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/adverbs')
  }

  addSentence(val:any) {
    return this.http.post(this.APIUrl + '/sentence', val)
  }
  
}
