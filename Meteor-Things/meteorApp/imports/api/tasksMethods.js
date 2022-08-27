import {check} from "meteor/check";
import {TasksCollection} from "../db/TasksCollections";
Meteor.methods({

    'tasks.findAll' (){
        console.log(TasksCollection.find());
        return TasksCollection.find({});

    },

    'tasks.insert' (text){
        check(text, String);
        if(!this.userId){
            throw new Meteor.Error("not authorized!!!")
        }
        TasksCollection.insert({
            text, createdAt: new Date(), userId : this.userId,
        })
    },

    'tasks.setIsChecked' (taskId, isChecked){
        check(taskId, String);
        check(isChecked, Boolean);
        if(!this.userId){
            throw new Meteor.Error("not authorized!!!")
        }

        const task = TasksCollection.findOne({_id: taskId, userId:this.userId});
        if(!task){
            throw new Meteor.Error("access denied")
        }

        TasksCollection.update(taskId, {
          $set: {
              isChecked : isChecked
          }
        })
    },

    'tasks.remove' (taskId){
        check(taskId, String);
        if(!this.userId){
            throw new Meteor.Error("not authorized!!!")
        }

        const task = TasksCollection.findOne({_id: taskId, userId:this.userId});
        if(!task){
            throw new Meteor.Error("access denied")
        }

       TaskCollection.remove(taskId);
    },



})


