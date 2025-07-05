import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, DEF_POST_NUM } from '../shared/constants';
import { Post } from '../modules/news/state/news.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private POST_URL: string = API_URL + '/posts';

  constructor(private http: HttpClient) {}

  getAllPosts(limit?: number): Observable<Post[]> {
    const url = !limit
      ? `${this.POST_URL}?_limit=${DEF_POST_NUM}`
      : `${this.POST_URL}?_limit=${limit}`;
    return this.http.get<Post[]>(url);
  }

  getSinglePost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.POST_URL}/${id}}`);
  }
}
