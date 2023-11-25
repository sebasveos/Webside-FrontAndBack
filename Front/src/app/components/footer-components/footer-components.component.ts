import { Component } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';
@Component({
  selector: 'app-footer-components',
  templateUrl: './footer-components.component.html',
  styleUrls: ['./footer-components.component.css']
})
export class FooterComponentsComponent {
  public decodedToken: any;

  constructor(
    private _globalService: GlobalServiceService,

  ) {

  }
  ngOnInit() {
    this.decodedToken = this._globalService.decodeTokenFromCookie();
  }


}
