import { AlertSettingService } from './alert-setting.service';

export type TShowAlert = 'red' | 'yellow' | 'green' | 'blue';

export interface IAlertModal {
  /** text or html */
  text: string;
  /** background color of alert (by default color is #323232) */
  color?: TShowAlert;
  /** display time */
  seconds?: number;
}

export class AlertModal implements IAlertModal {

  private defaultSecodns: number;
  public text: string;
  public color?: TShowAlert;

  public get seconds(): number {
    return this._seconds;
  }
  public set seconds(ms: number) {
    this._seconds = this.defaultSecodns;
    if (!ms === undefined || !ms === null || !isNaN(ms)) {
      this._seconds = ms;
    }
    this._seconds = this._seconds * 1000;
  }
  public _seconds?: number;

  constructor(data: IAlertModal, setting: AlertSettingService) {
    this.defaultSecodns = setting.config.defaultSecodns;
    this.text = data.text;
    this.color = data.color;
    this.seconds = data.seconds;
  }
}
