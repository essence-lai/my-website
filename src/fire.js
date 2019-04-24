import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDQ1la-G9W0RhK2gzRyiQpLQPq8T6RWv2g",
    authDomain: "essence-lai-f0105.firebaseapp.com",
    databaseURL: "https://essence-lai-f0105.firebaseio.com",
    projectId: "essence-lai-f0105",
    storageBucket: "essence-lai-f0105.appspot.com",
    messagingSenderId: "999591247597"
};
var fire = firebase.initializeApp(config);
export default fire;