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
            completed: false
        }
    ];
    // vm.addTasks = (newItem) => {
    //     vm.tasks.shift({
    //         task: newItem.task,
    //         completed: false
    //     })
    // }

}






angular
    .module("todoApp")
    .controller("TodoController", TodoController);