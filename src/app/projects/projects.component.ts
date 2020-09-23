import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects = [
    {
      src: "assets/project_imgs/event_management.PNG",
      title: "Event Management",
      text1: "Event Management website where users can host events and other users can book them as well.",
      text2: "Built using Angular, GraphQL, Node.js, Express.js, MongoDB",
      href: "soon",
      github: "https://github.com/sureshnagulapalli/Event-Management"
    },
    {
      src: "assets/project_imgs/project_management.PNG",
      title: "Project Management",
      text1: "Project Managament is a website where users can create tasks for projects and even communicate within the project",
      text2: "Built using Angular, Rest APIs, Spring Boot, MySQL",
      href: "soon",
      github: "https://github.com/sureshnagulapalli/Event-Management"
    },
    {
    src: "assets/project_imgs/CampR.png",
    title: "CampR",
    text1: "A mobile friendly camping website for users can host camps.",
    text2: "Built using Node.Js, Express.Js, MongoDB, Bootstrap 4",
    href: "https://damp-dawn-57731.herokuapp.com/",
    github: "https://github.com/sureshnagulapalli/Camp-website"
  },
  {
    src: "assets/project_imgs/freshfood.PNG",
    title: "FreshFood",
    text1: "FreshFood is an online food delivery website, where diet plans are provided for a subscription.",
    text2: "It is an architectured frontend built using HTML and CSS.",
    href: "https://sureshnagulapalli.github.io/freshfood-website/",
    github: "https://github.com/sureshnagulapalli/freshfood-website"
  },
  {
    src: "assets/project_imgs/smart_window_blind.jpeg",
    title: "Smart Window Blind using IOT",
    text1: "Smart Window blind is embedded with the Arduino board.",
    text2: "With the help of this device, a regular window blind becomes smart and users can open or close the blinds with just one tap through the phone.",
    href: "",
    github: ""
  },
  {
    src: "assets/project_imgs/students_marks_prediction.png",
    title: "Student's Marks prediction using Machine Learning",
    text1: "Implemented a project which allows users to analyse students’ marks, to predict performance.",
    text2: "Implemented various ML algorithms like Decision Tree, Random Forest, and Support Vector Machine to analyse their performance and achieved 90% accuracy",
    href: "",
    github: ""
  },
  {
    src: "assets/project_imgs/intelligent_blind_stick.jpg",
    title: "Intelligent blind stick using IOT",
    text1: "Embedded an Arduino board Integrated with an ultrasonic sensor to detect obstacles, a water sensor to detect water and a GPS tracker to send messages to the user's immediate contact, through the cloud. Wireless RF-based remote is provided to locate the cane.",
    text2: "",
    href: "",
    github: ""
  }]

  constructor() { }

  ngOnInit() {  }

}
