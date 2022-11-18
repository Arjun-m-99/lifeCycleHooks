import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes-child',
  templateUrl: './changes-child.component.html',
  styleUrls: ['./changes-child.component.css']
})
export class ChangesChildComponent implements OnInit {

  @Input() myValProp!: string;
  propChanges: any;

  constructor() {
    console.log("ChildComponent: Constructor");
  }

  ngOnInit(): void {
    console.log("ChildComponent: ngOnInIt");

  }

  ngDoCheck() {
    console.log("ChildComponent: ngDoCheck");

  }

  ngAfterContentInIt() {
    console.log("ChildComponent: contentInIt");
  }

  ngAfterContentChecked() {
    console.log("ChildComponent: AfterCOntentChecked");

  }

  ngAfterViewInit() {
    console.log("ChildComponent: AfterViewInIt");
  }

  ngAfterViewChecked() {
    console.log("ChildComponent: AfterViewChecked");
  }

  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ChildComponent:ngOnChanges");
    this.propChanges = changes;
    // console.log(this.propChanges);
  }

}
