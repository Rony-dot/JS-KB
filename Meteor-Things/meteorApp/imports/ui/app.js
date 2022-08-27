import {Template} from "meteor/templating";
import './app.html';
import {TasksCollection} from "../db/TasksCollections";
import { ReactiveDict } from 'meteor/reactive-dict';
import './Task.js'
import './Login.js'

const IS_LOADING_STRING = "isLoading";
const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.mainApp.onCreated(function mainContainerOnCreated(){
    this.state = new ReactiveDict();
    const handler = Meteor.subscribe('tasks');
    Tracker.autorun(()=>{
        this.state.set(IS_LOADING_STRING, !handler.ready());
    });
});


Template.mainApp.helpers({
    tasks () {
        return TasksCollection.find({}, {sort: {createdAt: -1}});
    },
    isUserLogged(){
        return isUserLogged();
    },

    getUser(){
        return getUser();
    },

    isLoading(){
        const instance = Template.instance();
        return instance.state.get(IS_LOADING_STRING);
    },


    // tasks : [
    //     {text : "my task 1", time : new Date()},
    //     {text : "my task 2", time : new Date()},
    //     {text : "my task 3", time : new Date()},
    //     {text : "my task 4", time : new Date()},
    // ]

});

Template.mainApp.events({
    'click .user' (){
        Meteor.logout()
    },
});

Template.my_form.events({
    "submit .task_form"(event){

        event.preventDefault();

        const text = event.target.text.value;

        // TasksCollection.insert({
        //     text, createdAt : new Date(), userId : getUser()._id, username: getUser().username,
        // });

        // use meteor.call instead of directly calling mini mongo methods
        Meteor.call('tasks.insert',text);

        event.target.text.value = "";
    },


})

