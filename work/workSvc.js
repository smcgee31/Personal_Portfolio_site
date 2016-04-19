angular.module('app')
.service('workSvc', function() {

    var workHistory = [
        {
            title: 'Grizzly Satellite, Inc.',
            desc: 'Design and development of a website for a small satellite tv installation company using the technologies that I had been working with at the time.',
            tech: ['HTML', 'CSS', 'PHP', 'jQuery'],
            img: 'img/GrizzlySatellite.png'
        },
        {
            title: 'iTunes Searcher',
            desc: 'This was a wonderful project that I completely stumbled through while I was a student at DevMountain. I still don\'t understand what I\'m doing on this one!',
            tech: ['HTML', 'CSS', 'AngularJS'],
            img: 'img/iTunesSearcher.png'
        },
        {
            title: 'Pokedex',
            desc: 'A mobile Pokedex for the serious Pokemon fan! This project was a lot of fun to design and get working since it was my first personal "creation" outside of my assignments while at DevMountain. (best viewed on a cell phone)',
            tech: ['HTML', 'CSS', 'AngularJS'],
            img: 'img/Pokedex_fixed.png'
        },
    ];

    this.getProjects = function() {
        return workHistory;
    };










});
