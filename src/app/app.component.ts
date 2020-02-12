import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  title = 'portfolio';

  ngOnInit() {
    this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': 1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

this.myParams = {
        particles: {
            number: {
                value: 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                  }
            },
            color: {
                value: '#d1b034'
            },
            shape: {
                type: 'circle',
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "top-left",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "remove"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 3,
                    "duration": 6.587837837837833,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 16.89189189189188,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }
              
    }
};




