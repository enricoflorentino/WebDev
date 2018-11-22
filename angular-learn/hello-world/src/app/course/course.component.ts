import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  imageUrl = "https://images.unsplash.com/photo-1542773049-ccc00e2a69d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b6b937eb302431329b198824f307635&auto=format&fit=crop&w=1500&q=80";
  
  isActive = false;
  email = "nothing@mcmaster.ca";
  constructor() { }

  whatisEmail () {
    console.log(this.email);
  }
  ngOnInit() {
  }

}
