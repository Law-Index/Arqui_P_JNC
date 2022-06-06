import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '/assets/proyecto-1.jpg',
      thumbImage: '/assets/proyecto-1.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: '/assets/proyecto-2.jpg',
      thumbImage: '/assets/proyecto-2.jpg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '/assets/proyecto-3.jpg',
      thumbImage: '/assets/proyecto-3.jpg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '/assets/proyecto-4.jpg',
      thumbImage: '/assets/proyecto-4.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '/assets/proyecto-1.jpg',
      thumbImage: '/assets/proyecto-1.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '/assets/proyecto-3.jpg',
      thumbImage: '/assets/proyecto-3.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    }, {
      image: '/assets/proyecto-4.jpg',
      thumbImage: '/assets/proyecto-4.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }
];

}
