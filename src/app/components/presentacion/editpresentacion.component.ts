import { Component, OnInit } from '@angular/core';

import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpresentacion',
  templateUrl: './editpresentacion.component.html',
  styleUrls: ['./editpresentacion.component.css']
})
export class EditpresentacionComponent implements OnInit {
  pers: persona = null

  constructor(
    private personaS: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(2).subscribe(
      data =>{
        this.pers = data;
      }, err =>{
         //alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(2, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la presentacion");
        this.router.navigate(['']);
      }
    )
  }

}