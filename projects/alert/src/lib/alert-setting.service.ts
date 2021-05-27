import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AlertConfig } from './alert.config';

export const ALERT_DEFAULT_OPTIONS =
    new InjectionToken<AlertConfig>('alert-default-options', {
      providedIn: 'root',
      factory: ALERT_DEFAULT_OPTIONS_FACTORY,
    });

export function ALERT_DEFAULT_OPTIONS_FACTORY(): AlertConfig {
  return new AlertConfig();
}
@Injectable({
  providedIn: 'root'
})
export class AlertSettingService {

  constructor(@Inject(ALERT_DEFAULT_OPTIONS) public config: AlertConfig) {
  }
}
