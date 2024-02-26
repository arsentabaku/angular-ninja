import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../models/post.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public errorEvent = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndSavePost(postData: Post) {
    this.http
      .post(
        'https://angular-training-http-45efb-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        {
          observe: 'response',
          responseType: 'text',
        }
      )
      .subscribe(
        (response) => {
          console.log(response);
          console.log(response.headers);
          console.log(response.body);
        },
        (error) => {
          this.errorEvent.next(error.statusText);
        }
      );
  }

  fetchPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(
        'https://angular-training-http-45efb-default-rtdb.europe-west1.firebasedatabase.app/posts.json?urlParam=true',
        {
          headers: new HttpHeaders({ 'custom-header': 'yep' }),
          params: new HttpParams().set('httpParam', 'true'),
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }

          console.log(postsArray);
          return postsArray;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://angular-training-http-45efb-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
