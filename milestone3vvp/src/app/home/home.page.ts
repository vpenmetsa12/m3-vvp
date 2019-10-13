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
  bench_time = 0;
  bench_click = false;
  bench_set = 0;
  avg_bench_time = 0;
  bench_timer_disabled = false;
  bench_end_disabled = true
  dl_time = 0;
  dl_click = false;
  dl_set = 0;
  avg_dl_time = 0;
  dl_timer_disabled = false;
  dl_end_disabled = true
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
  benchTimer() { 
    this.bench_click = true;
    this.bench_timer_disabled = true;
    this.bench_end_disabled = false;
    this.bench_set++;
    let loop = setInterval(()=> {
      if (this.bench_click === true) {
        this.bench_time++;
      }
      else {
        this.avg_bench_time = this.bench_time / this.bench_set;
        clearInterval(loop);
      }
    }, 1000);
  }
  endBenchTimer() {
    this.bench_timer_disabled = false;
    this.bench_click = false;
    this.bench_end_disabled = true;
  }
  clearBenchTimer() {
    this.bench_time = 0;
    this.bench_click = false;
    this.bench_set = 0;
    this.avg_bench_time = 0;
    this.bench_timer_disabled = false;
    this.bench_end_disabled = true;
  }
  DLTimer() { 
    this.dl_click = true;
    this.dl_timer_disabled = true;
    this.dl_end_disabled = false;
    this.dl_set++;
    let loop = setInterval(()=> {
      if (this.dl_click === true) {
        this.dl_time++;
      }
      else {
        this.avg_dl_time = this.dl_time / this.dl_set;
        clearInterval(loop);
      }
    }, 1000);
  }
  endDLTimer() {
    this.dl_timer_disabled = false;
    this.dl_click = false;
    this.dl_end_disabled = true;
  }
  clearDLTimer() {
    this.dl_time = 0;
    this.dl_click = false;
    this.dl_set = 0;
    this.avg_dl_time = 0;
    this.dl_timer_disabled = false;
    this.dl_end_disabled = true;
  }
  }

