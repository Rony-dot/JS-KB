import { Meteor } from 'meteor/meteor';
import { TasksCollection } from "../imports/db/TasksCollections";
import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications'

const insertTask = (taskText, user) => TasksCollection.insert({text: taskText,
    createdAt: new Date(),
    userId : user._id,
} );

const SEED_USERNAME = 'meteor';
const SEED_PASSWORD = 'meteor';

Meteor.startup(() => {
    if(!Accounts.findUserByUsername(SEED_USERNAME)){
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
    }

    const user = Accounts.findUserByUsername(SEED_USERNAME);

  // code to run on server at startup
    if(TasksCollection.find().count() === 0){
        [
            'First Task2',
            'Second Task',
            'Third Task',
            'Fourth Task',
            'Fifth Task',
            'Sixth Task',
        ].forEach(insertTask, user)
    }
});
