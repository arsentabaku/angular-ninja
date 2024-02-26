import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.models';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public loadedPosts: Post[] = [];
  public isLoading = true;
  public error = '';
  private subscriptionsToClear: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {
    this.subscriptionsToClear = new Subscription();
  }
  ngOnInit() {
    this.subscriptionsToClear.add(
      this.postService.errorEvent.subscribe((result) => {
        this.error = result;
      })
    );
    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndSavePost(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe((response) => {
      console.log(response);
      this.loadedPosts = [];
    });
  }

  fetchPosts() {
    this.isLoading = true;
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.error = error.message;
      }
    );
  }

  handleError(): void {
    this.error = '';
    this.isLoading = false;
  }
}
