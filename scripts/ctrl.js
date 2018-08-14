"use strict";

function TodoController() {
    const vm = this;
    vm.tasks = [
        {
            task: "Eat",
            completed: true,
        },
        {
            task: "Run",
            completed: false
        },
        {
            task: "Exercise",
            completed: false
        },
        {
            task: "Study",
            completed: false
        },
        {
            task: "Meal Prep",
            completed: true
        }
    ];
    vm.addTask = (task) => {
        vm.tasks.push ({
            task: task,
            completed: false
        });
    }
    vm.removeTask = (index) => {
        vm.tasks.splice(index, 1);
    }
    vm.completeTask = (index, completed) => {
        vm.tasks[index].completed = true;
        
    }
}
angular
    .module("todoApp")
    .controller("TodoController", TodoController);