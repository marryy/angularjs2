import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {PostsService} from '../../services/posts-service/posts-service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'posts',
  directives: [CORE_DIRECTIVES],
  templateUrl: 'app/components/posts/posts.html'
})

export class Posts {
  posts;
  comments;
  constructor(private postsService: PostsService) {
  postsService.posts
    .subscribe(
      posts => this.posts = posts,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }

  // getBooksAndMovies() {
  //   this.postsService.getBooksAndMovies().subscribe(
  //     data => {
  //       this.books = data[0]
  //       this.movies = data[1]
  //     }
  //   );
  // }
}
