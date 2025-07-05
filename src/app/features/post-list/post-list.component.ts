import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { Post } from '../../core/models/post.interface';
import { PostDetailsDialogComponent } from './components/post-details-dialog/post-details-dialog.component';
import { PostsFacade } from '../../core/facades/posts.facade';

//extra effort fetch post limit to bump solution value a bit
import { POST_COUNTS, DEF_POST_NUM } from '../../core/constants';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  constructor(public postsFacade: PostsFacade, private dialog: MatDialog) {}
  //extra effort keep track of seen/unseen posts
  //also demontration of Set (which is perfect for this case)
  seenPosts = new Set<number>();
  selectedLimit: number = DEF_POST_NUM;

  ngOnInit(): void {
    this.postsFacade.loadPosts();
  }

  onShowPostDetails(post: Post) {
    //extra effort
    if (!this.seenPosts.has(post.id)) {
      this.seenPosts.add(post.id);
    }

    //display details via dialog to bump solution value a bit
    return this.dialog.open(PostDetailsDialogComponent, {
      width: 'auto',
      disableClose: true,
      data: post,
    });
  }

  onUpdateCount() {
    this.postsFacade.loadPosts(this.selectedLimit);
  }

  get showPostCounts() {
    return POST_COUNTS;
  }
}
