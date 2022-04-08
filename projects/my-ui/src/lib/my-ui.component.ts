import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-ui',
  template: `
    <p>
      my-ui works!
    </p>
  `,
  styles: [
  ]
})
export class MyUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
