import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Post } from '../../../../core/models/post.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-details-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './post-details-dialog.component.html',
})
//all pretty straight forward
export class PostDetailsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<PostDetailsDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) {}
}
