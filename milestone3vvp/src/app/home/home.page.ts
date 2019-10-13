import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  squat_time = 0;
  squat_click = false;
  squat_set = 0;
  avg_squat_time = 0;
  squat_timer_disabled = false;
  squat_end_disabled = true;
  constructor() {} 
  squatTimer() { 
    this.squat_click = true;
    this.squat_timer_disabled = true;
    this.squat_end_disabled = false;
    this.squat_set++;
    let loop = setInterval(()=> {
      if (this.squat_click === true) {
        this.squat_time++;
      }
      else {
        this.avg_squat_time = this.squat_time / this.squat_set;
        clearInterval(loop);
      }
    }, 1000);
  }
  endSquatTimer() {
    this.squat_timer_disabled = false;
    this.squat_click = false;
    this.squat_end_disabled = true;
  }
  clearSquatTimer() {
    this.squat_time = 0;
    this.squat_click = false;
    this.squat_set = 0;
    this.avg_squat_time = 0;
    this.squat_timer_disabled = false;
    this.squat_end_disabled = true;
  }
  }

