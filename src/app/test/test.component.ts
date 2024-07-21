import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { FormBuilder } from '@angular/forms';
import { Test } from '../models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService,
    private _formBuilder: FormBuilder,
  ) {
  }
  testForm = this._formBuilder.group({
    name:[],
    adress:[]
  })

  

  ngOnInit(): void {
    this.getTests();

  }
  tests:any;

  getTests() {
    this.testService.getTests().subscribe(
      res => {
        this.tests = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  onSubmit(){
    var body: Test = this.testForm.value;
    this.testService.addTests(body).subscribe(res => {

    })
  }

}
