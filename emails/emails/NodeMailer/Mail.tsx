import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import SheCodesMail from '../SheCodes/SheCodesMail';
import * as React from 'react';

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

async function sendEmail() {
  const emailHtml = render(<SheCodesMail  />);

  const options = {
    from: 'info@shecodeshacks.com',
    to: 'shivam2901jain@gmail.com',
    subject: 'hello world',
    html: emailHtml,
  };

  await transporter.sendMail(options);
}

sendEmail();
