import { Component, Input, OnChanges, SimpleChanges, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'lifeCycleHooks';
  name = "Angular " + VERSION.major;
  message= "Type here";
  content = "Hello";
  propChanges: any;
  displayChild = true;

  constructor() {
    console.log("AppComponent:Contructed");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.propChanges = changes;
    console.log(this.propChanges);
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngDoCheck() {
    console.log("AppComponent:ngDoCheck");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}

