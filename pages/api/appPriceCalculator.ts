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
      req.body.currentFormState +
      "\n\n" +
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
      "<p><strong>" +
      req.body.minPrice.toLocaleString("de-de") +
      " € - " +
      req.body.maxPrice.toLocaleString("de-de") +
      " €</strong></p>" +
      "<p>" +
      req.body.currentFormState +
      "</p>" +
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

  if (req.body.language == "en") {
    mailData = {
      from: "preisrechner@m-to-b.com",
      to: "kontakt@m-to-b.com",
      subject: `Price estimation for your app - M-to-B`,
      text:
        "Good day,\n\n" +
        "we look forward to helping you plan your app.\n" +
        "Based on your information in the price calculator:\n\n" +
        req.body.minPrice.toLocaleString("en-gb") +
        " € - " +
        req.body.maxPrice.toLocaleString("en-gb") +
        " €\n\n" +
        req.body.currentFormState +
        "\n\n" +
        "Kind regards,\n" +
        "Your M-to-B team\n\n\n" +
        "M-to-B Software\n" +
        "Owner Michel Busse\n" +
        "Kirchberger Str. 62\n" +
        "08107 Kirchberg\n" +
        "www.m-to-b.com\n" +
        "+49 160 98709043",
      html:
        "<body>" +
        "<div style='font-size: 14px; font-weight: normal; font-family: Roboto, Helvetica, Aral, sans-serif;'>" +
        "<p>Good day,</p>" +
        "<p>we look forward to helping you plan your app.<br/>" +
        "Based on your information in the price calculator:</p>" +
        "<p><strong>" +
        req.body.minPrice.toLocaleString("en-gb") +
        " € - " +
        req.body.maxPrice.toLocaleString("en-gb") +
        " €</strong></p>" +
        "<p>" +
        req.body.currentFormState +
        "</p>" +
        "<p>Kind regards,<br/>" +
        "Your M-to-B team</p><br/>" +
        "<p>M-to-B Software<br/>" +
        "Owner Michel Busse<br/>" +
        "Kirchberger Str. 62<br/>" +
        "08107 Kirchberg<br/>" +
        "www.m-to-b.com<br/>" +
        "+49 160 98709043</p>" +
        "</div>" +
        "</body>",
    };
  }

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
