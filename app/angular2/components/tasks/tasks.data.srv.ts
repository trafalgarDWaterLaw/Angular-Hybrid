import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Task} from "./task.model";

@Injectable()
export class TasksDataService {

  private tasksinit: Array<Task>;

  constructor(http: Http) {

    this.tasksinit = [
      new Task("Angular1"),
      new Task("Angular2"),
      new Task("Hybrid")
    ];

  }

  get tasks(): Array<Task> {
    return this.tasksinit;
  }
}
