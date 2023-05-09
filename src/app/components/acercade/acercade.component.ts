import { Component, OnInit } from '@angular/core';
//import { PorfolioService } from '../servicios/porfolio.service'
import { persona } from '../../model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","","","","","","",""); 

  constructor(public personaService: PersonaService, private tokenService: TokenService){}
  isLogged = false;
  

  
  ngOnInit():void{
    
    this.personaService.getPersona().subscribe(data => {this.persona = data});

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
