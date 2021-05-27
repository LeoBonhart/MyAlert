import { AlertModal, IAlertModal } from './alert.modal';
import { alertAnimations } from './alert.animations';
import { Component, OnInit } from '@angular/core';
import { AlertSettingService } from './alert-setting.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [alertAnimations.alertState]
})
export class AlertComponent implements OnInit {

  reverse: boolean;
  right: boolean;

  listAlerts: Array<AlertModal> = new Array<AlertModal>();

  constructor(private setting: AlertSettingService) { }

  ngOnInit(): void {
    this.reverse = this.setting.config.position === 'left-top' || this.setting.config.position === 'right-top';
    this.right = this.setting.config.position === 'right-top' || this.setting.config.position === 'right-bottom';
  }

  add(alert: IAlertModal | AlertModal) {
    const _alert = alert instanceof AlertModal ? alert : new AlertModal(alert, this.setting);
    this.listAlerts.push(_alert);
    setTimeout(() => {
      this.remove(_alert);
    }, _alert.seconds);
    this.check();
  }

  private remove(alert: AlertModal): void {
    this.listAlerts = this.listAlerts.filter(x => x !== alert);
  }

  private check() {
    if (this.listAlerts.length > this.setting.config.maxShowAlerts) {
      this.remove(this.listAlerts[0]);
    }
  }

  protected onClick(alert: AlertModal) {
    this.remove(alert);
  }

}
