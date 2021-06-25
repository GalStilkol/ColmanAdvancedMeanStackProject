
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
    const keys = searchTerm.toLowerCase().split(/(?:,| )+/).map(key =>key.trim());
    const ac = new AhoCorasick(keys);
    const matches = [];
    posts.forEach(post => {
      const titleAndDescription = post.title.toLowerCase() + ' ' + post.description.toLowerCase()
      const result = ac.search(titleAndDescription);
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
