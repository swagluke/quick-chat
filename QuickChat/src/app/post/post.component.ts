import { PostService } from '../services/post.service';
import { PostWithAuthor } from './../models/post.model';
import { AuthService } from '../services/auth.service';
import { Post } from '../models/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { MdSnackBar } from "@angular/material";

export enum EditMode {
  NoEditable = 0,
  DisplayEditButton = 1,
  Editing = 2,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../shared/common.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostWithAuthor;
  public editingMode: EditMode = EditMode.NoEditable;

  constructor(private authService: AuthService,
   private postService: PostService,
   public snackBar: MdSnackBar) { }

  ngOnInit() {
    if (this.post.authorKey == this.authService.currentUserUid) {
      this.editingMode = EditMode.DisplayEditButton;
    }
  }

  enableEditing(): void {
    this.editingMode = EditMode.Editing;
  }

  remove(): void {
    this.postService.remove(this.post.$key);
    const snackBarRef = this.snackBar.open("Post removed", "UNDO", {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(  () => { 
      console.log("TODO: Put it back!");
      const restoredPost = new Post();
      restoredPost.postBody = this.post.postBody;
      restoredPost.authorKey = this.authService.currentUserUid;
      this.postService.update(this.post.$key, restoredPost);
      this.snackBar.open("Post restored!", "", {
        duration: 3000,
      })
     })
  }

  saveEdit(): void {
    // Update the posts to the new value
    this.editingMode = EditMode.DisplayEditButton;
  }

  cancelEdit(): void {
    this.editingMode = EditMode.DisplayEditButton;
  }

}
