angular.module('app')
.service('workSvc', function() {

    var workHistory = [
        {
            title: 'Money Waterfall',
            desc: `This project is intended to be a piece of a larger website where the company is hoping to entice the potential customer into trying the simulation app and more fully understand one of the many financial things that they could do for the customer. This application takes the users debts in, and when the user decides how much more they can afford to apply to thier debts, will project a "debt freedom" date using a "waterfall" effect on the debts.`,
            tech: ['HTML', 'CSS', 'AngularJS', 'Node.js', 'Express', 'MongoDB'],
            img: 'public/img/mwaterfall.png',
            url: `http://moneywaterfall.stevenmcgee.me`
        },{
            title: 'DevTunes',
            desc: 'This was an AngularJS class project that I completed while at DevMountain. It will search iTunes for your artist and return a grid with a list of songs with all the other iTunes information about those songs. PS. it looks fine down to an iPad but a cell phone... not so much - needs work there.',
            tech: ['HTML', 'CSS', 'AngularJS'],
            img: 'public/img/iTunesSearcher.png',
            url: `http://itunesseacher.stevenmcgee.me`
        },{
            title: 'Grizzly Satellite, Inc.',
            desc: 'Design and development of a website for a small satellite tv installation company using the technologies that I had been working with at the time.',
            tech: ['HTML', 'CSS', 'PHP', 'jQuery'],
            img: 'public/img/GrizzlySatellite.png',
            url: `http://grizzly.stevenmcgee.me`
        },


    ];

    this.getProjects = function() {
        return workHistory;
    };










});
