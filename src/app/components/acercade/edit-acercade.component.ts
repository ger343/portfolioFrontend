import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit  {
  pers: persona = null;
    
  constructor(private Persona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router){}
  
  isLogged = false;
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Persona.detail(id).subscribe(
      data =>{
        this.pers = data;
      }, err =>{
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Persona.update(id, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        console.log(err)
         alert("Error al modificarse ");
         this.router.navigate(['']);
      }
    )
  }

}
