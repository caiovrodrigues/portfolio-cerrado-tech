import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MODULOS } from './app.module.server';

export default interface Modulo{
  id: number,
  titulo: string,
  objetivo: string,
  cards: Array<{
    titulo: string;
    itens: Array<string>
  }>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-cerrado-tech';
  moduloss: Modulo[] = MODULOS;
  moduloShow!: Modulo;
  indexSlideActive = 0;

  ngOnInit(){
    this.moduloShow = this.moduloss[0];
    const numb = document.querySelector(".numb");
    let counter = 0;
    let intervalCounter1 = setInterval(()=>{
      if(counter == 5){
        clearInterval(intervalCounter1);
      }else{
        counter+=1;
        numb!.textContent = counter + " anos";
      }
    }, 200);

    const numb2 = document.querySelector(".numb2");
    let counter2 = 0;
    let intervalCounter2 = setInterval(()=>{
      if(counter2 == 600){
        clearInterval(intervalCounter2);
      }else{
        counter2+=3;
        numb2!.textContent =  "+" + counter2;
      }
    }, 1);
  }


  avancarModulo(){
    if(this.moduloShow.id == 7){
      this.moduloShow = this.moduloss[0];
      return;
    }
    this.moduloShow = this.moduloss[this.moduloShow.id];
  }

  voltarModulo(){
    if(this.moduloShow.id == 1){
      this.moduloShow = this.moduloss[this.moduloss.length - 1];
      return;
    }
    this.moduloShow = this.moduloss[this.moduloShow.id - 2];
  }
}
