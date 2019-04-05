import { Component, OnInit, Input } from '@angular/core';
import { VideoItem } from './video-item.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input() public video: VideoItem;

  constructor() { }

  ngOnInit() { }
}
