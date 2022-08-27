import {Meteor} from "meteor/meteor";
import {TasksCollection} from "../db/TasksCollections";

Meteor.publish('tasks', function publishTasks(){
   return TasksCollection.find({userId: this.userId})
});

