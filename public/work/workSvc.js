angular.module('app')
.service('workSvc', function() {

    var workHistory = [
        {
            title: 'Money Waterfall',
            desc: 'This project is intended to be a piece of a larger website where the company is hoping to entice the potential customer into trying the simulation app and more fully understand one of the many financial things that they could do for the customer. This application takes the users debts in, and when the user decides how much more they can afford to apply to thier debts, will project a "debt freedom" date using a "waterfall" effect on the debts.',
            tech: ['HTML', 'CSS', 'AngularJS', 'Node.js', 'Express', 'MongoDB'],
            img: 'img/mwaterfall.png',
            url: 'http://moneywaterfall.stevenmcgee.me'
        },{
            title: 'Code School Clone',
            desc: 'While at DevMountain I cloned the home page of Code School for an HTML/CSS project. It was intended to be a pixel perfect replica and I think I did a pretty good job. The school has since changed their site but you can see some of the same things on their page still.',
            tech: ['HTML', 'CSS'],
            img: 'img/codeschoolclone.png',
            url: 'http://codeschoolclone.stevenmcgee.me'
        },{
            title: 'DevTunes',
            desc: 'This was an AngularJS class project that I completed while at DevMountain. It will search iTunes for your artist and return a grid with a list of songs with all the other iTunes information about those songs. PS. it looks fine down to an iPad but a cell phone... not so much - needs work there.',
            tech: ['HTML', 'CSS', 'AngularJS'],
            img: 'img/devtunes.png',
            url: 'http://devtunes.stevenmcgee.me'
        },
    ];

    this.getProjects = function() {
        return workHistory;
    };










});
