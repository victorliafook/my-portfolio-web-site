"use strict";

angular.module("portfolioApp")

    .service("dataService", function() {
        this.getCertifications = function() {
            return {
                data: [{
                    name: "ITIL Foundation Certificate in IT Service Management",
                    organisation: "Exin",
                    year: "2012"
                }, {
                    name: "MCP: Programming in HTML5 with JavaScript and CSS3",
                    organisation: "Microsoft",
                    year: "2013"
                }]
            };
        };

        this.getCourses = function() {
            return {
                data: [{
                        name: "Machine Learning",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/verify/XHDM2VLRAAXC"
                    },
                    {
                        name: "Using Regular Expressions",
                        organisation: "LinkedIn",
                        year: "2016",
                        url: "http://www.linkedin.com/learning/using-regular-expressions"
                    },
                    {
                        name: "Full Stack Web Development Specialization",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/specialization/ZXK9K323URGU"
                    },
                    {
                        name: "Server-side Development with NodeJS",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/verify/QVX392JQ4NT5"
                    },
                    {
                        name: "Multiplatform Mobile App Development with Web Technologies",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/verify/3HWE8ZWZCXGJ"
                    },
                    {
                        name: "Front-End JavaScript Frameworks: AngularJS",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/verify/PZV7T4P4PDJ6"
                    },
                    {
                        name: "Front-End Web UI Frameworks and Tools",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/verify/2DWJDYZ34GDJ"
                    },
                    {
                        name: "HTML, CSS and JavaScript",
                        organisation: "Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/verify/N6FY48QCXQZD"
                    },
                    {
                        name: "Programming Mobile Applications for Android Handheld Systems: Part 2",
                        organisation: "Coursera",
                        year: "2015",
                        url: "https://www.coursera.org/account/accomplishments/verify/GE8BJJHCR8"
                    },
                    {
                        name: "Programming Mobile Applications for Android Handheld Systems: Part 1",
                        organisation: "Coursera",
                        year: "2015",
                        url: "https://www.coursera.org/account/accomplishments/verify/P9GDCG5K5V"
                    },
                    {
                        name: "Cryptography I",
                        organisation: "Coursera",
                        year: "2015",
                        url: "https://www.coursera.org/learn/crypto"
                    }
                ]
            };
        };

        this.getExperience = function() {
            return {
                data: [{
                    name: "Web Developer",
                    organisation: "Noix Internet",
                    yearFrom: "2010",
                    yearTo: "2010"
                }, {
                    name: "Software Developer",
                    organisation: "Secrel SST",
                    yearFrom: "2010",
                    yearTo: "2011"
                }, {
                    name: "Software Developer",
                    organisation: "3IT Consultoria",
                    yearFrom: "2011",
                    yearTo: "2017"
                }]
            };
        };
    });