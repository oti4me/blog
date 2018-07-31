import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PostComponent } from './modules/post/post.component';
import { CategotiesComponent } from './modules/categoties/categoties.component';
import { AddPostComponent } from './modules/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PostsComponent,
    PostComponent,
    CategotiesComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
