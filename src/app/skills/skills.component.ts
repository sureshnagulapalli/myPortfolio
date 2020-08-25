import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {img: "assets/logos/JavaScript.png", alt:"JavaScript" },
    {img: "assets/logos/Java.jpg", alt:"Java" },
    {img: "assets/logos/Python.jpg", alt: "Python" },
    {img: "assets/logos/C.png", alt:"C" },
    {img: "assets/logos/HTML.png", alt:"HTML" },
    {img: "assets/logos/Css.png", alt:"Css" },
    {img: "assets/logos/angular.png", alt:"Angular" },
    {img: "assets/logos/Bootstrap.jpg", alt:"Bootstrap" },
    {img: "assets/logos/Spring.png", alt:"Spring" },
    {img: "assets/logos/Node.jpg", alt:"Node.Js" },
    {img: "assets/logos/MySql.png", alt:"MySql" },
    {img: "assets/logos/mongoDb.png", alt: "MongoDB" },
    {img: "assets/logos/Flask.png", alt: "Flask" },
    {img: "assets/logos/Git.png", alt: "Git" },
    {img: "assets/logos/Heroku.png", alt: "Heroku" },
    {img: "assets/logos/Heroku.png", alt: "GraphQL"},
    {img: "assets/logos/Heroku.png", alt: "REST API"},
    {img: "assets/logos/Heroku.png", alt: "Tensorflow"},
    {img: "assets/logos/Node.jpg", alt: "Scikit learning"},
    {img: "assets/logos/Heroku.png", alt: "NumPy"},
  ]

  s = " ";

  constructor() { }

  ngOnInit() {
  }

}
