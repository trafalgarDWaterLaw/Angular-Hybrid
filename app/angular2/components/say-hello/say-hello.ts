import {Component} from "angular2/core";

@Component({
    selector: "say-hello",
    templateUrl: "../app/angular2/components/say-hello/say-hello.html"
})

export class SayHello {

  sayHello() {
    alert("Hello");
  }

}
