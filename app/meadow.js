var express = require('express');
var app = express();

//var handlebars = require('hbs').create({ defaultLayout:'main' });
  //  app.engine('handlebars', handlebars.engine);
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000);

// app.get('/', function(req, res){ res.type('text/plain');
//             res.send('Meadowlark Travel');
// });
// app.get('/about', function(req, res){
//             res.type('text/plain');
//             res.send('About Meadowlark Travel');
// });
//     // custom 404 page
// app.use(function(req, res){ res.type('text/plain');
//             res.status(404);
//             res.send('404 - Not Found');
// });
//     // custom 500 page
// app.use(function(err, req, res, next){ console.error(err.stack);
//             res.type('text/plain');
//             res.status(500);
//             res.send('500 - Server Error');
// });
app.set('view options', { layout: 'layouts/main' });

app.use(express.static(__dirname + '/public'));
fortunes= "wait for it"

app.get('/', function(req,res){
	res.render('home');
});

app.get('/about', function(req, res){

            res.render('about',{fortune: fortunes});
});
    // custom 404 page
app.use(function(req, res, next){ 
						res.status(404);
            res.render('404');
});
    // 500 error handler (middleware)
app.use(function(err, req, res, next){ 
						console.error(err.stack);
            res.status(500);
            res.render('500');
});

app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
    });




