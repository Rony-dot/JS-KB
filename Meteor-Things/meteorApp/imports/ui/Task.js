import {Template} from "meteor/templating";
import {TasksCollection} from "../db/TasksCollections";
import './Task.html'


Template.task.events({
    'click .toggle-checked'(){
        console.log(this)
        console.log("value of checkbox "+this.isChecked)
        Meteor.call('tasks.setIsChecked',this._id, !this.isChecked);
        // TasksCollection.update(this._id, {
        //     $set: {isChecked: !this.isChecked},
        // });
    },
    'click .delete'(){
        if(confirm("sure you want to delete?")){
            Meteor.call('tasks.delete',this._id);
            // TasksCollection.remove(this._id);
        }

    },


});


