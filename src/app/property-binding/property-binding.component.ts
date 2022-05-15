import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {


  image: string = '/assets/img/santander-red.svg';

  constructor() { }

  ngOnInit(): void {
    this.changeImage(); 
  }

  changeImage():void {
    const logRed = '/assets/img/santander-red.svg';
    const logWhite = '/assets/img/santander-white.svg';

    setInterval(()=>{
      this.image === logRed ? this.image = logWhite : this.image = logRed;
    },2000);

  }

}
