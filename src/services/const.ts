import { Injectable } from '@angular/core';


@Injectable()
export class ConstData {
	public apiAddress = 'http://yourcareerconnect.com/api';
	public jobsUrl = this.apiAddress+'/careers.php';
	public eventsUrl = this.apiAddress+'/events.php';
  public newsUrl = 'https://yourcareerconnect.com/blog/wp-json/wp/v2/posts/';

  public filterUrl = "http://yourcareerconnect.com/api/options.php?id=";

  private userphoto: string= '';

  constructor() {

  }

  
}
