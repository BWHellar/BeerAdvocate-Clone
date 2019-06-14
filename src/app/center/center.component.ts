import { Component } from '@angular/core';
import { Forum } from '../models/forum.model';
import { Events } from '../models/events.model';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  forumPosts: Forum[] = [
    new Forum ("title", "postLocation")
  ];



  ngOnInit() {
  }

}
