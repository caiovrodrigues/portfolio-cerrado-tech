import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-cerrado-tech';

  indexSlideActive = 0;

  ngOnInit(){
    const numb = document.querySelector(".numb");
    let counter = 0;
    setInterval(()=>{
      if(counter == 5){
        // clearInterval();
      }else{
        counter+=1;
        numb!.textContent = counter + " anos";
      }
    }, 200);

    const numb2 = document.querySelector(".numb2");
    let counter2 = 0;
    setInterval(()=>{
      if(counter2 == 600){
        // clearInterval();
      }else{
        counter2+=2;
        numb2!.textContent =  "+" + counter2;
      }
    }, 1);
  }


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
