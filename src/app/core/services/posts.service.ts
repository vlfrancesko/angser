import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, POST_NUM } from '../constants';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private POST_URL: string = API_URL + '/posts';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.POST_URL}?_limit=${POST_NUM}`);
  }

  getSinglePost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.POST_URL}/${id}}`);
  }
}
