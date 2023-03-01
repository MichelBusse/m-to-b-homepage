import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp",
  port: 25,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let mailData = {
    from: "preisrechner@m-to-b.com",
    to: "preisrechner@m-to-b.com",
    subject: `Preisrechner-Tracking`,
    text:
      "Angaben:\n\n[" +
      req.body.currentFormState.join("],[") +
      "]\n\n" +
      "Zeitstempel:\n\n" +
      Date.now().toString(),
    html:
      "<body>" +
      "<div style='font-size: 14px; font-weight: normal; font-family: Roboto, Helvetica, Aral, sans-serif;'>" +
      "<p><strong>Angaben:</strong></p>" +
      "<p>[" +
      req.body.currentFormState.join("],[") +
      "]</p>" +
      "<p><strong>Zeitstempel:</strong></p>" +
      `<p>${Date.now().toString()}</p>` +
      "</div>" +
      "</body>",
  };

  let mailRes = await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        resolve(false);
        console.log(err);
      } else {
        resolve(true);
      }
    });
  });

  if (mailRes) {
    res.status(200).end();
  } else {
    res.status(500).end();
  }
}
