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

    var interests = [
        {
            name: 'Water Sports',
            img: 'img/waterSkiing.svg',
            memo: 'Boating, water skiiing, jet skiing, etc.'
        },
        {
            name: 'Movies',
            img: 'img/cinema.svg',
            memo: 'Love \'em - \'nuff said!'
        },
        {
            name: 'Snowboarding',
            img: 'img/snowboard.svg',
            memo: 'I\'d rather snowboard than water ski!'
        },
        {
            name: 'Martial Arts',
            img: 'img/martialArts.svg',
            memo: 'Black belt in RyuKyu Kempo.'
        },
        {
            name: 'Travel',
            img: 'img/travelShip.svg',
            memo: 'WooWoo! Who doesn\'t love to travel!?'
        },
        {
            name: 'Hang Gliding',
            img: 'img/hangGliding.svg',
            memo: 'Don\'t know how YET, but fascinated with it.'
        }
    ];

    this.getSkills = function() {
        return skillset;
    };

    this.getInterests = function() {
        return interests;
    };


});
