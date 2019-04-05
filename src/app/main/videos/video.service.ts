import { Injectable } from '@angular/core';

import { VideoItem } from './video-item.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  public getVideoItem(): VideoItem[] {
    return [
      {
        id: 1,
        title: 'Video course #1',
        creation_date: '22/10/19',
        duration: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Quas mollitia minus totam exercitationem repellat.\
        Corrupti qui quo aut.Sapiente doloremque ducimus earum,\
        vel eaque amet voluptatem quisquam molestias veritatis dolores?'
      },
      {
        id: 2,
        title: 'Video course #2',
        creation_date: '22/10/19',
        duration: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Quas mollitia minus totam exercitationem repellat.\
        Corrupti qui quo aut.Sapiente doloremque ducimus earum,\
        vel eaque amet voluptatem quisquam molestias veritatis dolores?'
      },
      {
        id: 3,
        title: 'Video course #3',
        creation_date: '22/10/19',
        duration: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Quas mollitia minus totam exercitationem repellat.\
        Corrupti qui quo aut.Sapiente doloremque ducimus earum,\
        vel eaque amet voluptatem quisquam molestias veritatis dolores?'
      }
    ];
  }
}
