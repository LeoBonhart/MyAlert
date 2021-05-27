# Alert

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.14.

<img src="https://drive.google.com/uc?export=view&id=1V-Kd20Twxeo9dRdWXKMnKKJJsBHoPGV6" alt="example">

### How to use

To use this library you need import `AlertModule` in your AppModule
```ts
import { AlertModule } from 'alert-leobonhart';
```
Then add imported module to the property `imports` in decorator `@NgModule`

```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

After that you can be used service `AlertService` to add alerts.

`AlertService` has only one method
#### add
input data is an object with  interface `IAlertModal`
```ts
interface IAlertModal {
  text: string; // text or html
  color?: TShowAlert; // background color of alert (by default color is #323232)
  seconds?: number; // alert display time
}

/** All this colors is material colors with brigtnes 500 */
type TShowAlert = 'red' | 'yellow' | 'green' | 'blue';
```

example usage `AlertService`

```ts
...
import { AlertService } from 'alert-leobonhart';
@Component({
  selector: 'your-component',
  templateUrl: './your.component.html',
  styleUrls: ['./your.component.scss']
})
export class YourComponent implements OnInit {

  ngOnInit(): void {

    /** only text */
    this.alert.add({
      text: 'Hello World'
    });

    /** text with color */
    this.alert.add({
      text: 'Hello World',
      color: 'red'
    });

    /** text with color and display time in 5 seconds*/
    this.alert.add({
      text: 'Hello World',
      color: 'red',
      seconds: 5
    });
  }

  constructor(private alert: AlertService) {
  }

}
```

### Config
You can config default options
Injection token that can be used to specify default options
```ts
const ALERT_DEFAULT_OPTIONS: InjectionToken<AlertConfig>
```
or can use service `AlertSettingService`

example
```ts
...
import { AlertModule, AlertSettingService } from 'alert-leobonhart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private setting: AlertSettingService) {
    this.setting.config.defaultSecodns = 5;
    this.setting.config.maxShowAlerts = 3;
    this.setting.config.position = 'left-top';
  }

}
```

##### settings
| Name           | Type          | Description                                               |
| -------------- |:------------- |:--------------------------------------------------------- |
| defaultSecodns | number        |Alert display time _by default 2 seconds_                  |
| maxShowAlerts  | number        | Maximum simultaneously displayed alerts _by default 2_    |
| position       | PositionAlert | Position of alerts  _by default left-bottom_              |
```ts
type PositionAlert = 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
```