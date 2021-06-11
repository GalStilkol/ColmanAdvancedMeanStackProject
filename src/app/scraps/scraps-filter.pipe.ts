
import { PipeTransform, Pipe, OnInit } from '@angular/core';
import { Scrap } from './scrap.model';
declare var require: any;

@Pipe({
  name: 'ScrapFilter'
})
export class ScrapFilterPipe implements PipeTransform {
  // using AhoCorasick which looking for the keys (each of the posts) as substring of the searchTerm
  transform(posts: Scrap[], searchTerm: string): Scrap[] {
    // console.log(searchTerm);
    const AhoCorasick = require('ahocorasick');
    if (!posts || !searchTerm) {
      return posts;
    }
    searchTerm = searchTerm.toLowerCase();
    const matches = [];
    posts.forEach(post => {
      const splitedTitle = post.title.toLowerCase().split(/(?:,| )+/);
      const splitedDescription = post.description.toLowerCase().split(/(?:,| )+/);
      const keys = splitedTitle.concat(splitedDescription);
      const keysNoSpaces = keys.map(key =>key.trim());
      // console.log(keysNoSpaces);
      const ac = new AhoCorasick(keysNoSpaces);
      const result = ac.search(searchTerm);
      // console.log(result)
      if (result.length !== 0) {
        matches.push(post.id);
      }
    });

    if (matches.length !== 0) {
      return posts.filter(post => matches.includes(post.id));
    } else {
      return posts;
    }
  }
}
