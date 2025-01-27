import { css } from "lit";

export const styles = css`
  :host {
    --lines-width: 100%;
    --mdc-icon-size: 24px;
    --clickable-cursor: pointer;
    --individualone-color: #d0cc5b;
    --individualtwo-color: #964cb5;
    --individualthree-color: #48DE02;
    --individualfour-color: #d117bb;
    --individualfive-color: #e30505;
    --non-fossil-color: var(--energy-non-fossil-color, #0f9d58);
    --icon-non-fossil-color: var(--non-fossil-color, #0f9d58);
    --icon-solar-color: var(--energy-solar-color, #ff9800);
    --icon-individualone-color: var(--individualone-color, #d0cc5b);
    --icon-individualtwo-color: var(--individualtwo-color, #964cb5);
    --icon-individualthree-color: var(--individualthree-color, #48DE02);
    --icon-individualfour-color: var(--individualfour-color, #d117bb);
    --icon-individualfive-color: var(--individualfive-color, #e30505);
    --icon-grid-color: var(--energy-grid-consumption-color, #488fc2);
    --icon-battery-color: var(--energy-battery-in-color, #f06292);
    --icon-home-color: var(--energy-grid-consumption-color, #488fc2);
    --text-solar-color: var(--primary-text-color);
    --text-non-fossil-color: var(--primary-text-color);
    --text-individualone-color: var(--primary-text-color);
    --text-individualtwo-color: var(--primary-text-color);
    --text-individualthree-color: var(--primary-text-color);
    --text-individualfour-color: var(--primary-text-color);
    --text-individualfive-color: var(--primary-text-color);
    --text-home-color: var(--primary-text-color);
    --secondary-text-individualone-color: var(--primary-text-color);
    --secondary-text-individualtwo-color: var(--primary-text-color);
    --secondary-text-individualthree-color: var(--primary-text-color);
    --secondary-text-individualfour-color: var(--primary-text-color);
    --secondary-text-individualfive-color: var(--primary-text-color);
    --text-battery-state-of-charge-color: var(--primary-text-color);
    --cirlce-grid-color: var(--energy-grid-consumption-color, #488fc2);
    --circle-battery-color: var(--energy-battery-in-color, #f06292);
    --battery-grid-line: var(--energy-grid-return-color, #8353d1);
    --secondary-text-solar-color: var(--primary-text-color);
    --secondary-text-grid-color: var(--primary-text-color);
    --secondary-text-home-color: var(--primary-text-color);
    --secondary-text-non-fossil-color: var(--primary-text-color);
    --lines-svg-not-flat-line-height: 106%;
    --lines-svg-not-flat-line-top: -3%;
    --lines-svg-flat-width: calc(100% - 160px);
    --lines-svg-not-flat-width: calc(103% - 165px);
    --transparency: var(--transparency-unused-lines);
    --greyed-out--line-color: #bdbdbd;
    --text-grid-consumption-color: var(--energy-grid-consumption-color);
    --text-grid-return-color: var(--energy-grid-return-color);
    --text-battery-in-color: var(--energy-battery-in-color);
    --text-battery-out-color: var(--energy-battery-out-color);
  }

  ha-card.full-size {
    height: 100%;
  }

  .card-content.full-size {
    transform: scale(2) translateY(30%);
  }

  .card-content {
    position: relative;
    margin: 0 auto;
  }

  .card-content,
  .row {
    max-width: 470px;
  }
  .lines {
    position: absolute;
    bottom: 0;
    left: 0;
    width: var(--lines-width);
    height: 146px;
    display: flex;
    justify-content: center;
    padding: 0 16px 16px;
    box-sizing: border-box;
  }
  .lines.individual1-individual2 {
    bottom: 110px;
  }
  .lines.high {
    bottom: 100px;
    height: 156px;
  }
  .indiv3 {
    position: absolute;
    bottom: 110px;
    height: 156px;
    left: auto;
    right: 0px;
    display: flex;
    padding: 0 16px 16px;
  }
  .indiv4 {
    position: absolute;
    bottom: 110px;
    height: 156px;
    left: auto;
    right: 0px;
    display: flex;
    padding: 0 16px 16px;
  }
  .indiv5 {
    position: absolute;
    bottom: 0px;
    height: 156px;
    left: auto;
    right: 0px;
    display: flex;
    padding: 0 16px 16px;
  }
  .lines svg {
    width: var(--lines-svg-flat-width);
    height: 100%;
    max-width: 340px;
  }

  .lines svg:not(.flat-line) {
    width: var(--lines-svg-not-flat-width);
    height: var(--lines-svg-not-flat-line-height);
    top: var(--lines-svg-not-flat-line-top);
    position: relative;
  }

  .row {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  }
  .circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }
  .circle-container.solar {
    height: 130px;
  }
  .circle-container.individual2 {
    height: 130px;
  }
  .circle-container.individual3 {
    height: 130px;
  }
  .circle-container.individual4 {
    height: 130px;
  }
  .circle-container.individual5 {
    height: 130px;
  }
  .circle-container.individual1 {
    height: 130px;
  }
  .circle-container.individual2.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.individual3.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.individual4.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.individual5.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.middle {
    height: 100%;
  }
  .circle-container.battery {
    height: 110px;
    justify-content: flex-end;
  }
  .spacer {
    width: 84px;
  }
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    position: relative;
    text-decoration: none;
    color: var(--primary-text-color);
    // background-color: var(--card-background-color); /* hide overflowing lines behind background */
  }
  .circle-container .circle {
    cursor: var(--clickable-cursor);
  }
  #battery-grid {
    stroke: var(--battery-grid-line);
  }
  ha-icon {
    padding-bottom: 2px;
  }
  ha-icon.small {
    --mdc-icon-size: 12px;
  }
  .label {
    color: var(--secondary-text-color);
    font-size: 12px;
    max-width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-height: 20px;
  }
  line,
  path {
    stroke: var(--disabled-text-color);
    stroke-width: 1;
    fill: none;
  }
  path.transparency {
    opacity: calc(calc(100 - var(--transparency)) / 100);
  }
  path.grey {
    stroke: var(--greyed-out--line-color) !important;
  }
  .circle svg {
    position: absolute;
    fill: none;
    stroke-width: 4px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  span.secondary-info {
    color: var(--primary-text-color);
    font-size: 12px;
    max-width: 60px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .individual2 path,
  .individual2 circle {
    stroke: var(--individualtwo-color);
  }
  .individual3 path,
  .individual3 circle {
    stroke: var(--individualthree-color);
  }
  .individual4 path,
  .individual4 circle {
    stroke: var(--individualfour-color);
  }
  .individual5 path,
  .individual5 circle {
    stroke: var(--individualfive-color);
  }

  #individual1-icon {
    color: var(--icon-individualone-color);
  }
  #individual2-icon {
    color: var(--icon-individualtwo-color);
  }
  #individual3-icon {
    color: var(--icon-individualthree-color);
  }
  #individual4-icon {
    color: var(--icon-individualfour-color);
  }
  #individual5-icon {
    color: var(--icon-individualfive-color);
  }
  #solar-icon {
    color: var(--icon-solar-color);
  }
  circle.individual2 {
    stroke-width: 4;
    fill: var(--individualtwo-color);
  }
  circle.individual3 {
    stroke-width: 4;
    fill: var(--individualthree-color);
  }
  circle.individual4 {
    stroke-width: 4;
    fill: var(--individualfour-color);
  }
  circle.individual5 {
    stroke-width: 4;
    fill: var(--individualfive-color);
  }
  .individual2 .circle {
    border-color: var(--individualtwo-color);
  }
  .individual3 .circle {
    border-color: var(--individualthree-color);
  }
  .individual4 .circle {
    border-color: var(--individualfour-color);
  }
  .individual5 .circle {
    border-color: var(--individualfive-color);
  }
  .individual1 path,
  .individual1 circle {
    stroke: var(--individualone-color);
  }
  circle.individual1 {
    stroke-width: 4;
    fill: var(--individualone-color);
  }
  .individual1 .circle {
    border-color: var(--individualone-color);
  }
  .circle-container.low-carbon {
    margin-right: 4px;
    height: 130px;
  }
  .low-carbon path {
    stroke: var(--non-fossil-color);
  }
  .low-carbon .circle {
    border-color: var(--non-fossil-color);
  }
  .low-carbon ha-icon:not(.small) {
    color: var(--icon-non-fossil-color);
  }
  circle.low-carbon {
    stroke-width: 4;
    fill: var(--non-fossil-color);
    stroke: var(--non-fossil-color);
  }
  .solar {
    color: var(--primary-text-color);
  }
  .solar .circle {
    border-color: var(--energy-solar-color);
  }
  .solar ha-icon:not(.small) {
    color: var(--icon-solar-color);
  }
  circle.solar,
  path.solar {
    stroke: var(--energy-solar-color);
  }
  circle.solar {
    stroke-width: 4;
    fill: var(--energy-solar-color);
  }
  .battery .circle {
    border-color: var(--circle-battery-color);
  }
  circle.battery,
  path.battery {
    stroke: var(--energy-battery-out-color);
  }
  path.battery-home,
  circle.battery-home {
    stroke: var(--energy-battery-out-color);
  }
  circle.battery-home {
    stroke-width: 4;
    fill: var(--energy-battery-out-color);
  }
  path.battery-solar,
  circle.battery-solar {
    stroke: var(--energy-battery-in-color);
  }
  circle.battery-solar {
    stroke-width: 4;
    fill: var(--energy-battery-in-color);
  }
  .battery-in {
    color: var(--energy-battery-in-color);
  }
  .battery-out {
    color: var(--energy-battery-out-color);
  }
  span.battery-in {
    color: var(--text-battery-in-color);
  }
  span.battery-out {
    color: var(--text-battery-out-color);
  }
  path.battery-from-grid {
    stroke: var(--energy-grid-consumption-color);
  }
  path.battery-to-grid {
    stroke: var(--battery-grid-line);
  }
  .battery ha-icon:not(.small) {
    color: var(--icon-battery-color);
  }

  path.return,
  circle.return,
  circle.battery-to-grid {
    stroke: var(--energy-grid-return-color);
  }
  circle.return,
  circle.battery-to-grid {
    stroke-width: 4;
    fill: var(--energy-grid-return-color);
  }
  .return {
    color: var(--energy-grid-return-color);
  }
  span.return {
    color: var(--text-grid-return-color);
  }
  .grid .circle {
    border-color: var(--circle-grid-color);
  }
  .consumption {
    color: var(--energy-grid-consumption-color);
  }
  span.consumption {
    color: var(--text-grid-consumption-color);
  }
  circle.grid,
  circle.battery-from-grid,
  path.grid {
    stroke: var(--energy-grid-consumption-color);
  }
  circle.grid,
  circle.battery-from-grid {
    stroke-width: 4;
    fill: var(--energy-grid-consumption-color);
  }
  .grid ha-icon:not(.small) {
    color: var(--icon-grid-color);
  }
  .home .circle {
    border-width: 0;
    border-color: var(--primary-color);
  }
  .home .circle.border {
    border-width: 2px;
  }
  .home ha-icon:not(.small) {
    color: var(--icon-home-color);
  }
  .circle svg circle {
    animation: rotate-in 0.6s ease-in;
    transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;
    fill: none;
  }
  span.solar {
    color: var(--text-solar-color);
  }

  span.low-carbon {
    color: var(--text-non-fossil-color);
  }

  span.nonFossilFuel.secondary-info {
    color: var(--secondary-text-non-fossil-color);
  }

  #home-circle {
    color: var(--text-home-color);
  }

  .individual1 .circle {
    color: var(--text-individualone-color);
  }

  .individual2 .circle {
    color: var(--text-individualtwo-color);
  }

  .individual3 .circle {
    color: var(--text-individualthree-color);
  }

  .individual4 .circle {
    color: var(--text-individualfour-color);
  }

  .individual5 .circle {
    color: var(--text-individualfive-color);
  }

  .individual1 span.secondary-info {
    color: var(--secondary-text-individualone-color);
  }

  .individual2 span.secondary-info {
    color: var(--secondary-text-individualtwo-color);
  }

  .individual3 span.secondary-info {
    color: var(--secondary-text-individualthree-color);
  }

  .individual4 span.secondary-info {
    color: var(--secondary-text-individualfour-color);
  }
  .individual5 span.secondary-info {
    color: var(--secondary-text-individualfive-color);
  }

  .solar span.secondary-info {
    color: var(--secondary-text-solar-color);
  }

  .grid span.secondary-info {
    color: var(--secondary-text-grid-color);
  }

  .home span.secondary-info {
    color: var(--secondary-text-home-color);
  }

  #battery-state-of-charge-text {
    color: var(--text-battery-state-of-charge-color);
  }

  @keyframes rotate-in {
    from {
      stroke-dashoffset: 238.76104;
      stroke-dasharray: 238.76104;
    }
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-actions a {
    text-decoration: none;
  }

  .home-circle-sections {
    pointer-events: none;
  }
`;
