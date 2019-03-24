import { Injectable } from '@angular/core';
export interface IWord {
  key: string ;
  meaning: string;
}
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'hello', meaning: 'xin chao'},
    {key: 'sorry', meaning: 'xin loi'},
    { key: 'goodbye', meaning: 'tam biet'}
  ];
  constructor() { }
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning ;
    }
    return 'Not found';
  }
  getAll(): IWord[] {
    return this.words;
  }
}
