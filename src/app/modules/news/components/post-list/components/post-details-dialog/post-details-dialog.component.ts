import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Post } from '../../../../state/news.model';
import { MatButtonModule } from '@angular/material/button';
import { UpFirstPipe } from '../../../../../../shared/pipes/up-first.pipe';

@Component({
  selector: 'app-post-details-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
    UpFirstPipe,
  ],
  templateUrl: './post-details-dialog.component.html',
})
//all pretty straight forward
export class PostDetailsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<PostDetailsDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) {}
}
