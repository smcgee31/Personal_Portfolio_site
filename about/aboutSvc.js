angular.module('app').service('aboutSvc', function() {

    var skillset = [
        {
            name: 'html',
            img: 'img/htmlLogo.png'
        },
        {
            name: 'css',
            img: 'img/cssLogo.png'
        },
        {
            name: 'javascript',
            img: 'img/javascriptLogo.png'
        },
        {
            name: 'angularjs',
            img: 'img/angularjsLogo.png'
        },
        {
            name: 'jquery',
            img: 'img/jqueryLogo.png'
        },
        {
            name: 'php',
            img: 'img/phpLogo.png'
        }
    ];

    this.getSkills = function() {
        return skillset;
    };


});
