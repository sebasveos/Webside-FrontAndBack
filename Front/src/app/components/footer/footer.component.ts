import { Component } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public decodedToken : any;

  constructor(
    private _globalService: GlobalServiceService,

  ){

  }
  ngOnInit() {
    this.decodedToken = this._globalService.decodeTokenFromCookie();
  }


}
