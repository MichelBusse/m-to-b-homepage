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
  const mailData = {
    from: req.body.email ?? "kontakt@m-to-b.com",
    to: "kontakt@m-to-b.com",
    subject: `Preis-Rechner Anfrage Beratungsgespräch`,
    text:
      "Anfrage über Preis-Rechner-Callback für Beratungsgespräch: \n\n" +
      "E-Mail: " + req.body.email + "\n" +
      "Telefon: " + req.body.phone + "\n" +
      "Preis-Rechner-Tag: " + req.body.tag
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
