var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'martin.hojman@zerf.com.ar',
    pass: '************'
  }
});

var mailOptions = {
  from: 'martin.hojman@zerf.com.ar',
  to: 'martin.hojman@zerf.com.ar',
  subject: 'Sending Email using Node.js Tutorial',
  html: '<style>* {background: #4285f4;}</style><main><h1>Welcome</h1><p>That was easy!</p><button> Apretá acá y gana la copa </button></main>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 