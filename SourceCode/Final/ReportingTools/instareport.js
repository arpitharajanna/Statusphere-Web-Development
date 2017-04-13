var ig = require('instagram-node').instagram();

"use strict";

ig.use({ access_token: '4844161687.2ae7350.82975958f52d48458c0d5e026bd870da' });

ig.use({ client_id: '2ae73508dca141f891f5f099ce1c6a84',

         client_secret: ' 0b955bf6bbfe4d6587348638f104493b' });



         app.post('/like/:media_id', function(req, res, next) {

           var ig = require('instagram-node').instagram({});

           ig.use({ access_token: '4844161687.2ae7350.82975958f52d48458c0d5e026bd870da' });



           ig.add_like(req.param('media_id'), {

             sign_request: {

               client_secret: '0b955bf6bbfe4d6587348638f104493bx',

               // Then you can specify the request:

               client_req: req,

               // or the IP on your own:

               ip: '132.170.253.255'

             }

           }, function(err) {

             // handle err here

             return res.send('OK');

           });

         });



         var http = require('http');

         var express = require('express');

         var api = require('instagram-node').instagram();

         var app = express();



      //   app.configure(function() {

           // The usual...

      //   });



         api.use({

           client_id: '2ae73508dca141f891f5f099ce1c6a84',

           client_secret: '0b955bf6bbfe4d6587348638f104493b'

         });



         var redirect_uri = 'http://joinstatus.com/handleauth';



         exports.authorize_user = function(req, res) {

           res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));

         };



         exports.handleauth = function(req, res) {

           api.authorize_user(req.query.code, redirect_uri, function(err, result) {

             if (err) {

               console.log(err.body);

               res.send("Didn't work");

             } else {

               console.log('Yay! Access token is ' + result.access_token);

               res.send('You made it!!');

             }

           });

         };

/********************************/

/*            USERS             */

/********************************/

ig.user('user_id', function(err, result, remaining, limit) {});



/* OPTIONS: { [count], [min_id], [max_id] }; */

ig.user_self_feed([options,], function(err, medias, pagination, remaining, limit) {});



/* OPTIONS: { [count], [min_timestamp], [max_timestamp], [min_id], [max_id] }; */

ig.user_media_recent('user_id', [options,], function(err, medias, pagination, remaining, limit) {});



/* OPTIONS: { [count], [min_timestamp], [max_timestamp], [min_id], [max_id] }; */

ig.user_self_media_recent([options,], function(err, medias, pagination, remaining, limit) {});



/* OPTIONS: { [count], [max_like_id] }; */

ig.user_self_liked([options,], function(err, medias, pagination, remaining, limit) {});



/* OPTIONS: { [count] }; */

ig.user_search('username', [options,], function(err, users, remaining, limit) {});



/********************************/

/*            LIKES             */

/********************************/

ig.likes('media_id', function(err, result, remaining, limit) {});



ig.add_like('media_id', function(err, remaining, limit) {});



ig.del_like('media_id', function(err, remaining, limit) {});





/********************************/

/*         RELATIONSHIP         */

/********************************/

/* OPTIONS: { [count], [cursor] }; */

ig.user_follows('user_id', function(err, users, pagination, remaining, limit) {});



/* OPTIONS: { [count], [cursor] }; */

ig.user_followers('user_id', function(err, users, pagination, remaining, limit) {});



ig.user_self_requested_by(function(err, users, remaining, limit) {});



ig.user_relationship('user_id', function(err, result, remaining, limit) {});



ig.set_user_relationship('user_id', 'follow', function(err, result, remaining, limit) {});





var ig = require('instagram-node').instagram();



var hdl = function(err, result, pagination, remaining, limit) {

  // Your implementation here

  if(pagination.next) {

    pagination.next(hdl); // Will get second page results

  }

};



ig.tag_media_recent('test', hdl);
