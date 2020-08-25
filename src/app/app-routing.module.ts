import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
//import { CurrentComponent } from './projects/current/current.component';
//import { FutureComponent } from './projects/future/future.component';


const routes: Routes  = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent}
    /*
    { path: 'projects', component: ProjectsComponent, children: [
        {path: '', redirectTo:'current', pathMatch: 'full'},
        {path: 'current', component: CurrentComponent},
        {path: 'future', component: FutureComponent}
    ] }
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
