///**
// * Created by sunny on 16-4-19.
// */
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
//var nodemailer = require('nodemailer');
//
//// create reusable transporter object using the default SMTP transport
//var transporter = nodemailer.createTransport('smtp://frontgoo@sina.com:goofront@smtp.sina.com');
//
//// setup e-mail data with unicode symbols
//var mailOptions = {
//    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
//    to: 'sunnyshl@sina.com', // list of receivers
//    subject: 'Hello ✔', // Subject line
//    text: 'Hello world 🐴', // plaintext body
//    html: '<b>Hello world 🐴</b>' // html body
//};
//
//// send mail with defined transport object
//transporter.sendMail(mailOptions, function(error, info){
//    if(error){
//        return console.log(error);
//    }
//    console.log('Message sent: ' + info.response);
//});


var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'sina',
    auth: {
        user: 'sunnyshl@sina.com',
        pass: 'Wyp,1989519'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
}, {
    // default message fields

    // sender info
    from: 'Sender Name <sender@example.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});

console.log('SMTP Configured');

// Message object
var message = {

    // Comma separated list of recipients
    to: '"Receiver Name" <sunnyshl@sina.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', //

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
    '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

    // Apple Watch specific HTML body
    watchHtml: '<b>Hello</b> to myself'

    //// An array of attachments
    //attachments: [
    //
    //    // String attachment
    //    {
    //        filename: 'notes.txt',
    //        content: 'Some notes about this e-mail',
    //        contentType: 'text/plain' // optional, would be detected from the filename
    //    },
    //
    //    // Binary Buffer attachment
    //    {
    //        filename: 'image.png',
    //        content: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
    //            '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
    //            'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
    //
    //        cid: 'note@example.com' // should be as unique as possible
    //    },
    //
    //    // File Stream attachment
    //    {
    //        filename: 'nyan cat ✔.gif',
    //        path: __dirname + '/assets/nyan.gif',
    //        cid: 'nyan@example.com' // should be as unique as possible
    //    }
    //]
};

console.log('Sending Mail');
transporter.sendMail(message, function (error, info) {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
});