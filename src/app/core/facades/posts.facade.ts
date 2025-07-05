import { Injectable, signal } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  posts = signal<Post[]>([]);
  focusedPost = signal<Post | null>(null);

  constructor(private api: PostsService) {}

  loadPosts(limit?: number) {
    this.api.getAllPosts(limit).subscribe((posts) => this.posts.set(posts));
  }

  loadPost(id: number) {
    this.api.getSinglePost(id).subscribe((post) => this.focusedPost.set(post));
  }
}
