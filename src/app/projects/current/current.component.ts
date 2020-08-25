import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  projects = [
    {
      src: "",
      title: "Event Management",
      text1: "Event Management website where users can host events and other users can book them as well",
      text2: "Built using Angular, GraphQL, Node.js, Express.js, MongoDB",
      href: ""

    },
    {
    src: "assets/project_imgs/CampR.png",
    title: "CampR",
    text1: "A camping website built using Bootstrap, Node.js, Passport.js, and MongoDB where users can host camps.",
    text2: "Users need to be logged in to host or comment on camps.",
    href: "https://damp-dawn-57731.herokuapp.com/"
  },
  {
    src: "assets/project_imgs/freshfood.PNG",
    title: "FreshFood",
    text1: "FreshFood is an online food delivery website, where diet plans are provided for a subscription.",
    text2: "It is an architectured frontend built using HTML and CSS.",
    href: "http://radiant-lowlands-14019.herokuapp.com/"
  },
  {
    src: "assets/project_imgs/smart_window_blind.jpg",
    title: "Smart Window Blind using IOT",
    text1: "Smart Window blind is embedded with the Arduino board.",
    text2: "With the help of this device, a regular window blind becomes smart and users can open or close the blinds with just one tap through the phone.",
    href: ""
  },
  {
    src: "assets/project_imgs/students_marks_prediction.png",
    title: "Student's Marks prediction using Machine Learning",
    text1: "Implemented a project which allows users to analyze students’ marks based on factors such as school, age, gender, weekly study time, past failures, and free time after school, to predict performance which will benefit students, educators, and academic institutions.",
    text2: "",
    href: ""
  },
  {
    src: "assets/project_imgs/intelligent_blind_stick.jpg",
    title: "Intelligent blind stick using IOT",
    text1: "Embedded an Arduino board Integrated with an ultrasonic sensor to detect obstacles, a water sensor to detect water and a GPS tracker to send messages to the user's immediate contact, through the cloud. Wireless RF-based remote is provided to locate the cane.",
    text2: "",
    href: ""
  }]

  constructor() { }

  ngOnInit() {
  }

}
