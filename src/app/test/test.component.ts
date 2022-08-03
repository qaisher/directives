import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public display = false;

  public gender = "boys";

  public names = ["qaisher", "rohit", "rahul", "animesh", "zafar"];

  

  ngOnInit(): void {
  }

}
