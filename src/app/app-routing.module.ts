import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';
import { EditAcercadeComponent } from './components/acercade/edit-acercade.component';
import { NewAcercadeComponent } from './components/acercade/new-acercade.component';
import { EditpresentacionComponent } from './components/presentacion/editpresentacion.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';




const routes: Routes = [
      {path: '', component: HomeComponent },
      {path: 'login', component: LoginComponent },
      { path: 'nuevaexp', component: NewExperienciaComponent},
      { path: 'editexp/:id', component: EditExperienciaComponent },  
      {path: 'nuevaedu', component: NeweducacionComponent },
      {path: 'editedu/:id', component: EditeducacionComponent },
      {path: 'newskill', component: NewSkillComponent},
      {path: 'editskill/:id', component: EditSkillComponent},
      {path: 'nuevaacercade',  component: NewAcercadeComponent},
      {path: 'editacercade/:id', component: EditAcercadeComponent},
      {path: 'editpresentacion/:id', component: EditpresentacionComponent },
      {path: 'editproye/:id', component: EditProyectosComponent},
      {path: 'nuevaproye', component: NewProyectosComponent}

];
 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]

})
export class AppRoutingModule { }

