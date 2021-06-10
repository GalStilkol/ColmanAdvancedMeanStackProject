// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Router } from '@angular/router';

// import { environment } from '../../environments/environment';
// import { Scrap } from './scrap.model';

// const BACKEND_URL = environment.apiUrl + '/scraps/';

// @Injectable({ providedIn: 'root' })
// export class ScrapsService {
//   private scraps: Scrap[] = [];
//   private scrapsUpdated = new Subject<{ scraps: Scrap[], scrapCount: number }>();

//   constructor(private http: HttpClient, private router: Router) { }
//   getAllScraps() {
//     return this.scraps;
//   }
//   getScraps(scrapsPerPage: number, currentPage: number) {
//     const queryParams = `?pagesize=${scrapsPerPage}&page=${currentPage}`;
//     this.http.get<{ message: string, scraps: any, maxScraps: number }>(
//       BACKEND_URL + queryParams
//     )
//       .pipe(map((scrapDate) => {
//         return {
//           scraps: scrapDate.scraps.map(scrap => {
//             return {
//               id: scrap._id,
//               name: scrap.name,
//               ingredients: scrap.ingredients,
//               instructions: scrap.instructions,
//               tags: scrap.tags,
//               servings: scrap.servings,
//               image: scrap.image,
//               time_total: scrap.time.total,
//             };
//           }),
//           maxScraps: scrapDate.maxScraps
//         };
//       }))
//       .subscribe(transformScraps => {
//         this.scraps = transformScraps.scraps;
//         this.scrapsUpdated.next({ scraps: [...this.scraps], scrapCount: transformScraps.maxScraps });
//       });
//   }

//   getScrapUpdateListener() {
//     return this.scrapsUpdated.asObservable();
//   }

//   getScrap(id: string) {
//     // tslint:disable-next-line: max-line-length
//     return this.http.get<{ _id: string, name: string, ingredients: string[], instructions: string[], tags: string[], servings: string, image: string, time_total: string }>(
//       BACKEND_URL + id
//     );
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Scrap } from './scrap.model';

const BACKEND_URL = environment.apiUrl + '/scraps/';

@Injectable({ providedIn: 'root' })
export class ScrapsService {
  private scraps: Scrap[] = [];
  private scrapsUpdated = new Subject<{ scraps: Scrap[], scrapCount: number }>();

  constructor(private http: HttpClient, private router: Router) { }
  getAllScraps() {
    return this.scraps;
  }
  getScraps(scrapsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${scrapsPerPage}&page=${currentPage}`;
    this.http.get<{ message: string, scraps: any, maxScraps: number }>(
      BACKEND_URL + queryParams
    )
      .pipe(map((scrapDate) => {
        return {
          scraps: scrapDate.scraps.map(scrap => {
            return {
              id: scrap._id,
              title: scrap.title,
              year: scrap.year,
              summary: scrap.summary,
              len: scrap.len,
              director: scrap.director
            };
          }),
          maxScraps: scrapDate.maxScraps
        };
      }))
      .subscribe(transformScraps => {
        this.scraps = transformScraps.scraps;
        this.scrapsUpdated.next({ scraps: [...this.scraps], scrapCount: transformScraps.maxScraps });
      });
  }

  getScrapUpdateListener() {
    return this.scrapsUpdated.asObservable();
  }

  getScrap(id: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<{ _id: string, title: string, year: string, summary: string, len: string, director: string }>(
      BACKEND_URL + id
    );
  }

}
