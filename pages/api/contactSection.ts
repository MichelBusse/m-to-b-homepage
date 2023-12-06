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
  if(!req.body.email || !req.body.text){
    res.status(500).end();
    return;
  }

  const mailData = {
    from: req.body.email,
    to: "kontakt@m-to-b.com",
    subject: `Anfrageformular ` + req.body.pageReference,
    text:
      req.body.pageReference +
      "\n\n" +
      req.body.text +
      "\n\nName: " +
      req.body.name +
      "\n\nTelefon: " +
      req.body.tel +
      "\n\nE-Mail: " +
      req.body.email,
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
