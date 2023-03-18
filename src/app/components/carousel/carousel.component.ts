import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;


  selectedIndex = 0;


  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval)
  }


  //set index of image on dot/indicator click
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }

  }


  // Los Q&A

  //  const items = document.querySelectorAll('.accordion button');

  // function toggleAccordion(this: any){
  //    const itemToggle = this.getAttribute('aria-expanded')
  
  //    for(let i=0; i < items.length; i++){
  //      items[i].setAttribute('aria-expanded','false');
  //    }
  
  //    if(itemToggle=='false'){
  //      this.setAttribute('aria-expanded', true)
  //    }
  
  //  }
  
  //  items.forEach((item)=> item.addEventListener('click', toggleAccordion)); 


}

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}
