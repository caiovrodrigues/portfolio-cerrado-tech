import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-cerrado-tech';

  indexSlideActive = 0;


  avancarSlide(){
    this.indexSlideActive++;
    let sliders = document.querySelector(".sliders") as HTMLDivElement;
    if(this.indexSlideActive <= 6){
      sliders.style.marginLeft = `-${this.indexSlideActive}00%`;
    }else{
      sliders.style.marginLeft = `0%`;
      this.indexSlideActive = 0;
    }
  }

  voltarSlide(){
    this.indexSlideActive--;
    let sliders = document.querySelector(".sliders") as HTMLDivElement;
    if(this.indexSlideActive >= 1){
      sliders.style.marginLeft = `-${this.indexSlideActive}00%`;
    }else{
      sliders.style.marginLeft = `0%`;
      this.indexSlideActive = 0;
    }
  }
}
