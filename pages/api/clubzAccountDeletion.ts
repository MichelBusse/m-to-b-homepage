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
  if(!req.body.userMail){
    res.status(500).end();
  }

  const mailData = {
    from: req.body.userMail,
    to: "kontakt@m-to-b.com",
    subject: `Clubz-Account-Löschung`,
    text:
      "Der folgende Account soll gelöscht werden:\n\n" +
      req.body.userMail +
      "\n\nBitte erst Bestätigungsmail schicken.",
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
