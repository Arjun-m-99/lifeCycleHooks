import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes-child',
  templateUrl: './changes-child.component.html',
  styleUrls: ['./changes-child.component.css']
})
export class ChangesChildComponent implements OnInit {

  @Input() myValProp!: string;
  propChanges: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("AppComponent:ngOnChanges");
    this.propChanges = changes;
    console.log(this.propChanges);
  }

}
