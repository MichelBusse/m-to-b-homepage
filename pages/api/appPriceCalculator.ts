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
  const tag = Math.round(Math.random() * 1000);

  let mailData = {
    from: "preisrechner@m-to-b.com",
    to: "kontakt@m-to-b.com",
    subject: `Preisabschätzung für Ihre App - M-to-B`,
    text:
      "Guten Tag,\n\n" +
      "wir freuen uns, Ihnen bei der Planung Ihrer App helfen zu können.\n" +
      "Basierend auf den Angaben im Preis-Rechner:\n\n" +
      req.body.minPrice.toLocaleString("de-de") +
      " € - " +
      req.body.maxPrice.toLocaleString("de-de") +
      " €\n\n" +
      req.body.name +
      "\n\n" +
      req.body.phone +
      "\n\n[" +
      req.body.currentFormState.join('],[') +
      "]\n\n" +
      "Mit freundlichen Grüßen,\n" +
      "Ihr Team von M-to-B\n\n\n" +
      "M-to-B Software\n" +
      "Inh. Michel Busse\n" +
      "Kirchberger Str. 62\n" +
      "08107 Kirchberg\n" +
      "www.m-to-b.com\n" +
      "+49 160 98709043",
    html:
      "<body>" +
      "<div style='font-size: 14px; font-weight: normal; font-family: Roboto, Helvetica, Aral, sans-serif;'>" +
      "<p>Guten Tag,</p>" +
      "<p>wir freuen uns, Ihnen bei der Planung Ihrer App helfen zu können.<br/>" +
      "Basierend auf den Angaben im Preis-Rechner:</p>" +
      "<p>" +
      req.body.name +  
      "</p>" +
      "<p>" +
      req.body.phone +  
      "</p>" + 
      "<p><strong>" +
      req.body.minPrice.toLocaleString("de-de") +
      " € - " +
      req.body.maxPrice.toLocaleString("de-de") +
      " €</strong></p>" +
      "<p>[" +
      req.body.currentFormState.join('],[') +
      "]</p>" +
      "<p>Mit freundlichen Grüßen,<br/>" +
      "Ihr Team von M-to-B</p><br/>" +
      "<p>M-to-B Software<br/>" +
      "Inh. Michel Busse<br/>" +
      "Kirchberger Str. 62<br/>" +
      "08107 Kirchberg<br/>" +
      "www.m-to-b.com<br/>" +
      "+49 160 98709043</p>" +
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
