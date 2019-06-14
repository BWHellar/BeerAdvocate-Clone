import { Component } from '@angular/core';
import { Forum } from '../models/forum.model';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  title = 'BeerAdvocate';

  forumPosts: Forum[] = [
    new Forum ["title", "postLocation"]
  ];

  ngOnInit() {
  }

}
