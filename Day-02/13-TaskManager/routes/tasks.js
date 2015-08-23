var express = require('express');
var router = express.Router();

var taskStore = [
    {id : 1, name : "Explore Bangalore", isCompleted : false},
    {id : 2, name : "Watch a movie", isCompleted : false},
    {id : 3, name : "Fix that bug", isCompleted : false}
];


router.get('/', function(req, res, next) {
    var viewData = {
        list : taskStore
    };
    res.render('tasks/index', viewData);
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function(req, res, next){
    var newTaskName = req.body.newTaskName;
    var newId = taskStore.reduce(function(result, task){
        return result > task.id ? result : task.id;
    }, 0) + 1;
    var newTask = {
        id : newId,
        name : newTaskName,
        isCompleted : false
    };
    taskStore.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id);
    var task = taskStore.filter(function(task){
        return task.id === taskId;
    })[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
});

module.exports = router;
