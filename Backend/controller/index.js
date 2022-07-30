exports.home = function(req, res, next) {
    // console.log('===> Original URL: ' + req.session.url);
    // res.render('index', { 
    //     title: 'Ready2Help....',
    //     userName: req.user ? req.user.username : ''
    // });

    res.redirect('ticketlist/list');
};