import { Template } from 'meteor/templating';

import './app,html';

Template.mainContainer.helpers({
    tasks: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
    ],
});