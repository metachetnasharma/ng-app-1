import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Items";
  items = [{
              name: "item1",
              slug: "/item-1"
            },
            {
              name: "item2",
              slug: "/item-2"
            },
            {
              name: "item3",
              slug: "/item-3"
            },

          ];

  constructor() { }

  ngOnInit() {
  }

}
