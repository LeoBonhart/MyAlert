import { animate, AnimationTriggerMetadata, keyframes, query, state, style, transition, trigger } from '@angular/animations';

const ms: string = '200ms';

export const alertAnimations: {
  readonly alertState: AnimationTriggerMetadata;
} = {
  alertState: trigger('alert', [
    state('flyIn',
      style({
        height: '{{maxHeight}}px',
        transform: 'scale(1) translateY(0px)'
      }),
      {
        params: {
          maxHeight: 64,
          right: '',
          reverse: ''
        }
      }
    ),
    transition(':enter', [
      style({
        height: '0px',
        transform: 'scale(0.95) translateY({{reverse}}px)'
      }),
      animate(ms),
    ]),
    transition(':leave', [
      query('.alert-message',
        animate(ms,
          keyframes([
            style({
              opacity: '1',
              transform: 'scale(1) translateX(0px)',
              offset: 0
            }),
            style({
              opacity: '0.2',
              transform: 'scale(0.95) translateX({{right}}100px)',
              offset: 0.80
            }),
            style({
              opacity: '0',
              transform: 'scale(0.95) translateX({{right}}500px)',
              offset: 1
            })
          ])
        )
      ),
      animate(ms,
        style({
          height: '0px'
        })
      )
    ])
  ])
};
