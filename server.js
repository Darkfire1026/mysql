var mysql = require("mysql");
var express = require("express");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Blake1026",
    database: "work_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});


function start() {
    inquirer
        .prompt([{
            type: "list",
            name: "selection",
            message: "What do you want to do?",
            choices: [
              
                "Add a job",
                "Add a worker",
                "Add a department",
                
                "View a job"
                "View a department",
                "View a worker",
                "Update a worker",
            
                
            ]
        }])

    .then(function(response) {
        console.log(response);
        switch (response.selection) {
            case "Add a department":  getDepartmentInfo();
                break;
            case "Add a job": getjobInfo(); break; case "Add a worker": getworkerInfo();
                break;
            case "View a department":  viewDepartmentInfo();
                break; case "View a job":  viewjobInfo();
                break;  case "View a worker":
                viewworkerInfo();  break; case "Update a worker": updateDepartmentInfo();
                break;
            default:
                break;
        }
    });
}

function getDepartmentInfo() {
    console.log(name + "input");
    inquirer
        .prompt([{
            type: "input",
            name: "name",
            message: "What is the department name?"
        }])
        .then(function(response) {
            console.log(response);
        });
}

function getjobInfo() {
    console.log(name + "input");
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is the job's title?"
            },
            {
                type: "input",
                name: "name",
                message: "What is the salary for this job?"
            },
            {
                type: "input",
                name: "name",
                message: "What is this job's department id?"
            }
        ])
        .then(function(response) {
            console.log(response);
        });
}

function getworkerInfo() {
    console.log("");
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is the worker's first name?"
            }, {  type: "input",
 name: "name",
  message: "What is the worker's last name?"
            },
            {
                type: "input",
                name: "name",
                message: "What is the worker's job id?"
            },
            {
                type: "input",
                name: "name",
                message: "What is the id of the worker's manager?"
            }
        ])
        .then(function(response) {
            console.log(response);
        });


connection.end();
