export type PositionAlert = 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
export class AlertConfig {

  private readonly listPositions: Array<PositionAlert> = ['left-bottom', 'left-top', 'right-bottom', 'right-top'];

  private _defaultSecodns: number = 2;
  /**
   * ### Alert display time
   * by default 2 seconds
   */
  public set defaultSecodns(v: number) {
    this._defaultSecodns = v < 0 ? 0 : v;
  }
  /**
   * ### Alert display time
   * by default 2 seconds
   */
  public get defaultSecodns(): number {
    return this._defaultSecodns;
  }

  private _maxShowAlerts: number = 2;
  /**
   * ### Maximum simultaneously displayed alerts
   * by default 2
   */
  public get maxShowAlerts(): number {
    return this._maxShowAlerts;
  }
  /**
   * ### Maximum simultaneously displayed alerts
   * by default 2
   */
  public set maxShowAlerts(v: number) {
    this._maxShowAlerts = v < 1 ? 1 : v;
  }


  private _position: PositionAlert = 'left-bottom';
  /**
   * ### Position of alerts
   * by default left-bottom
   */
  public get position(): PositionAlert {
    return this._position;
  }
  /**
   * ### Position of alerts
   * by default left-bottom
   */
  public set position(v: PositionAlert) {
    this._position = this.listPositions.indexOf(v) === -1 ? 'left-bottom' : v;
  }
}
