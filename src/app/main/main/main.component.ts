import { Component, OnInit } from '@angular/core';

import { VideoItem } from '../videos/video-item.model';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public videoItems: VideoItem[] = [];

  constructor(private VideoService: VideoService){ }

  ngOnInit() {
    this.videoItems = this.VideoService.getVideoItem();
  }
}
