
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '432748228406-qtn0m0l9b171j4606tm8jmisq3f4j0hs.apps.googleusercontent.com', // ClientID,
  'ei6kDFc1BWTil-GzR7ICqEf7', // Client Secret,
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    '1//042olT0zWhCB8CgYIARAAGAQSNwF-L9IrzUWD66LgQD8CgOiTUdZrkaBLPpCyfY2o64T4eBzescSwyYsn7nkZ0JZGyh68VNeb0Jo',
});
const accessToken = oauth2Client.getAccessToken();
class EmailService {
  static smtpTransport = nodemailer.createTransport({
    //   @ts-ignore
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'worldopen189@gmail.com',
      clientId: '432748228406-qtn0m0l9b171j4606tm8jmisq3f4j0hs.apps.googleusercontent.com',
      clientSecret: 'ei6kDFc1BWTil-GzR7ICqEf7',
      refreshToken:
        '1//042olT0zWhCB8CgYIARAAGAQSNwF-L9IrzUWD66LgQD8CgOiTUdZrkaBLPpCyfY2o64T4eBzescSwyYsn7nkZ0JZGyh68VNeb0Jo',
      accessToken: accessToken,
    },
  });

  static async sendMessage(email, message, subject) {
    const mailOptions = {
      from: 'worldopen189@gmail.com',
      to: email,
      subject: subject,
      html: message,
    };

    return await new Promise((resolve, reject) => {
      return this.smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email Not Sent', error);
          return reject(error);
        } else {
          this.smtpTransport.close();
          console.log('Email sent: ' + info.response);
          return resolve(info);
        }
      });
    });
  }
}

module.exports = EmailService;
