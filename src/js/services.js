"use strict";

angular.module("portfolioApp")

    .service("dataService", function() {
		this.getAcademics = function() {
            return {
                data: [{
                    name: "MBA in IT Governance",
                    organisation: "Universidade de Fortaleza - UNIFOR",
                    year: "2013",
					url: "http://unifor.br"
                }, {
                    name: "Bachelor's Degree in Computer Science",
                    organisation: "Universidade Federal do Ceará - UFC",
                    year: "2011",
					url: "http://ufc.br"
                }]
            };
        };
		
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
                        organisation: "Stanford/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/certificate/XHDM2VLRAAXC"
                    },
                    {
                        name: "Using Regular Expressions",
                        organisation: "LinkedIn",
                        year: "2016",
                        url: "http://www.linkedin.com/learning/using-regular-expressions"
                    },
					{
                        name: "Coursera GTC Statement of Accomplishment - 15,000 Words Translated to English",
                        organisation: "Coursera",
                        year: "2016",
                        url: "http://www.coursera.community/community-certificates/?CID=13597858"
                    },
                    {
                        name: "Full Stack Web Development Specialization",
                        organisation: "Hong Kong University of Science and Technology/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZXK9K323URGU"
                    },
                    {
                        name: "Server-side Development with NodeJS",
                        organisation: "Hong Kong University of Science and Technology/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/certificate/QVX392JQ4NT5"
                    },
                    {
                        name: "Multiplatform Mobile App Development with Web Technologies",
                        organisation: "Hong Kong University of Science and Technology/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/certificate/3HWE8ZWZCXGJ"
                    },
                    {
                        name: "Front-End JavaScript Frameworks: AngularJS",
                        organisation: "Hong Kong University of Science and Technology/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/certificate/PZV7T4P4PDJ6"
                    },
                    {
                        name: "Front-End Web UI Frameworks and Tools",
                        organisation: "Hong Kong University of Science and Technology/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/certificate/2DWJDYZ34GDJ"
                    },
                    {
                        name: "HTML, CSS and JavaScript",
                        organisation: "Hong Kong University of Science and Technology/Coursera",
                        year: "2016",
                        url: "https://www.coursera.org/account/accomplishments/certificate/N6FY48QCXQZD"
                    },
                    {
                        name: "Programming Mobile Applications for Android Handheld Systems: Part 2",
                        organisation: "University of Maryland/Coursera",
                        year: "2015",
                        url: "https://www.coursera.org/account/accomplishments/certificate/GE8BJJHCR8"
                    },
                    {
                        name: "Programming Mobile Applications for Android Handheld Systems: Part 1",
                        organisation: "University of Maryland/Coursera",
                        year: "2015",
                        url: "https://www.coursera.org/account/accomplishments/certificate/P9GDCG5K5V"
                    },
                    {
                        name: "Cryptography I",
                        organisation: "Stanford/Coursera",
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