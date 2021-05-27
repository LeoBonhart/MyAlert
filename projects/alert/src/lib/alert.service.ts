import { Injectable } from '@angular/core';
import { AlertModule } from './alert.module';
import { AlertComponent } from './alert.component';
import { IAlertModal } from './alert.modal';
import { DomService } from './dom.service';

@Injectable({
  providedIn: AlertModule
})
export class AlertService {

  private component: AlertComponent;

  constructor(private dom: DomService<AlertComponent>) {
    this.dom.appendComponentToBody(AlertComponent);
    this.component = this.dom.instance;
  }

  add(alert: IAlertModal) {
    this.component.add(alert);
  }

}
