import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<div class="overlay">
      <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
      </div>
    </div>
    <style>
      .newtons-cradle {
        --uib-size: 50px;
        --uib-speed: 1.2s;
        --uib-color: #474554;
        position: relative;
        display: flex;
        margin: auto;
        margin-top: 45vh;
        align-items: center;
        justify-content: center;
        width: var(--uib-size);
        height: var(--uib-size);
      }

      .newtons-cradle__dot {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        width: 25%;
        transform-origin: center top;
      }

      .newtons-cradle__dot::after {
        content: '';
        display: block;
        width: 100%;
        height: 25%;
        border-radius: 50%;
        background-color: var(--uib-color);
      }

      .newtons-cradle__dot:first-child {
        animation: swing var(--uib-speed) linear infinite;
      }

      .newtons-cradle__dot:last-child {
        animation: swing2 var(--uib-speed) linear infinite;
      }

      @keyframes swing {
        0% {
          transform: rotate(0deg);
          animation-timing-function: ease-out;
        }

        25% {
          transform: rotate(70deg);
          animation-timing-function: ease-in;
        }

        50% {
          transform: rotate(0deg);
          animation-timing-function: linear;
        }
      }

      @keyframes swing2 {
        0% {
          transform: rotate(0deg);
          animation-timing-function: linear;
        }

        50% {
          transform: rotate(0deg);
          animation-timing-function: ease-out;
        }

        75% {
          transform: rotate(-70deg);
          animation-timing-function: ease-in;
        }
      }

      .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(200, 200, 200, 0.5) !important;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>`,
})
export class LoadingComponent {}
