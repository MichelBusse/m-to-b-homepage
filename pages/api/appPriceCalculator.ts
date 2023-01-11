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
    from: "kontakt@m-to-b.com",
    to: req.body.email,
    bcc: "kontakt@m-to-b.com",
    subject: `Preisabschätzung für Ihre App - M-to-B`,
    text:
      "Guten Tag,\n\n" +
      "wir freuen uns, Ihnen bei der Planung Ihrer App helfen zu können.\n" +
      "Basierend auf Ihren Angaben im Preis-Rechner schätzen wir das nötige Budget Ihrer App auf folgende Preisspanne ab:\n\n" +
      req.body.minPrice.toLocaleString("de-de") +
      " € - " +
      req.body.maxPrice.toLocaleString("de-de") +
      " €\n\n" +
      "Beachten Sie bitte, dass dieses Budget nur eine grobe Vorabschätzung mit wenigen Angaben ist.\n" +
      "Gerne bieten wir Ihnen ein kostenloses 30 minütiges Beratungsgespräch an, in dem Sie von einem Experten genau zu Ihren Vorstellungen beraten werden und am Ende ein unverbindliches Angebot mit den genauen Kosten erhalten können.\n\n" +
      "Jetzt kostenloses Beratungsgespräch vereinbaren:\n" +
      `https://m-to-b.com/App-Preis-Rechner-Callback?mail=${req.body.email}&tag=${tag} \n\n` +
      "Außerdem geben wir Ihnen am Ende dieser Mail noch einen Leitfaden, wie Sie ihr den Entwicklungs-Aufwand Ihrer App etwas genauer ausarbeiten und abschätzen können.\n\n" +
      "Für alle weiteren Fragen helfen wir Ihnen sehr gerne unter der Adresse kontakt@m-to-b.com weiter. Schicken Sie uns dafür einfach eine Nachricht mit Ihrem Anliegen.\n\n" +
      "Wir wünschen Ihnen viel Erfolg im weiteren Verlauf Ihres Projekt,\n" +
      "Mit freundlichen Grüßen,\n" +
      "Ihr Team von M-to-B\n\n\n" +
      "Entwicklungs-Aufwand Leitfaden:\n\n" +
      "1. Sammeln Sie Informationen über die Anforderungen und Funktionen der App:\n" +
      "Bevor Sie den Preis für die App-Entwicklung berechnen können, benötigen Sie ein klares Verständnis davon, was die App tun soll und welche Funktionen sie haben wird. Stellen Sie Fragen, um diese Anforderungen zu erfassen, und sammeln Sie so viele Details wie möglich.\n\n" +
      "2. Berücksichtigen Sie die Plattformen, auf denen die App entwickelt werden soll:\n" +
      "Wird die App für iOS, Android oder beide Plattformen entwickelt werden? Wenn sie für mehrere Plattformen entwickelt werden soll, wird dies den Preis erhöhen.\n\n" +
      "3. Berücksichtigen Sie das Design der App:\n" +
      "Wird das Design von Grund auf neu entwickelt werden müssen, oder gibt es bereits vorhandene Designs, die verwendet werden können? Ein umfangreiches, benutzerdefiniertes Design wird den Preis erhöhen.\n\n" +
      "4. Berücksichtigen Sie die Komplexität der Funktionen:\n" +
      "Je mehr Funktionen die App hat, desto teurer wird ihre Entwicklung sein. Berücksichtigen Sie auch, ob die App integriert werden muss mit bestehenden Systemen oder Datenbanken, da dies den Preis ebenfalls erhöhen wird.\n\n" +
      "5. Berücksichtigen Sie Benutzerauthentifizierung und Sicherheitsfunktionen:\n" +
      "Wird die App Benutzerauthentifizierung oder Sicherheitsfunktionen wie Verschlüsselung benötigen? Diese Funktionen können den Preis erhöhen.\n\n" +
      "6. Berücksichtigen Sie E-Commerce-Funktionalitäten:\n" +
      "Wird die App E-Commerce-Funktionalitäten enthalten, wie das Hinzufügen von Produkten zum Warenkorb oder das Durchführen von Zahlungen? Dies wird den Preis erhöhen.\n\n" +
      "7. Berücksichtigen Sie regelmäßige Updates und Wartung:\n" +
      "Wird es regelmäßige Updates oder Wartung der App geben, die in den Preis einbezogen werden müssen?\n\n" +
      "8. Berücksichtigen Sie die Leistungsanforderungen:\n" +
      "Gibt es besondere Anforderungen an die Leistung der App, wie zum Beispiel hohe Verarbeitungsgeschwindigkeit? Dies kann den Preis erhöhen.\n\n",
    html:
      "<body>" +
      "<div style='font-size: 14px; font-weight: normal; font-family: Roboto, Helvetica, Aral, sans-serif;'>" +
      "<p>Guten Tag,</p>" +
      "<p>wir freuen uns, Ihnen bei der Planung Ihrer App helfen zu können.<br/>" +
      "Basierend auf Ihren Angaben im Preis-Rechner schätzen wir das nötige Budget Ihrer App auf folgende Preisspanne ab:</p>" +
      "<p><strong>" +
      req.body.minPrice.toLocaleString("de-de") +
      " € - " +
      req.body.maxPrice.toLocaleString("de-de") +
      " €</strong></p>" +
      "<p>Beachten Sie bitte, dass dieses Budget nur eine grobe Vorabschätzung mit wenigen Angaben ist.<br/>" +
      "<p>Gerne bieten wir Ihnen ein kostenloses 30 minütiges Beratungsgespräch an, in dem Sie von einem Experten genau zu Ihren Vorstellungen beraten werden und am Ende ein unverbindliches Angebot mit den genauen Kosten erhalten können.</p>" +
      `<a href='https://m-to-b.com/App-Preis-Rechner-Callback?mail=${req.body.email}&tag=${tag}'><button style='font-size: inherit; padding: 8px; background-color: #022636; color: white; font-weight: bold; outline: none; border: none;'>Jetzt kostenloses Beratungsgespräch vereinbaren!</button></a>` +
      "<p>Außerdem geben wir Ihnen am Ende dieser Mail noch einen Leitfaden, wie Sie ihr den Entwicklungs-Aufwand Ihrer App etwas genauer ausarbeiten und abschätzen können.</p>" +
      "<p>Für alle weiteren Fragen helfen wir Ihnen sehr gerne unter der Adresse kontakt@m-to-b.com weiter. Schicken Sie uns dafür einfach eine Nachricht mit Ihrem Anliegen.</p>" +
      "<p>Wir wünschen Ihnen viel Erfolg im weiteren Verlauf Ihres Projekt,<br/>" +
      "Mit freundlichen Grüßen,<br/>" +
      "Ihr Team von M-to-B</p><br/>" +
      "<h1 style='font-size: inherit; font-weight: bold;'>Entwicklungs-Aufwand Leitfaden:</h1>" +
      "<ol>" +
      "<li>Sammeln Sie Informationen über die Anforderungen und Funktionen der App:<br/>" +
      "Bevor Sie den Preis für die App-Entwicklung berechnen können, benötigen Sie ein klares Verständnis davon, was die App tun soll und welche Funktionen sie haben wird. Stellen Sie Fragen, um diese Anforderungen zu erfassen, und sammeln Sie so viele Details wie möglich.</li>" +
      "<li>Berücksichtigen Sie die Plattformen, auf denen die App entwickelt werden soll:<br/>" +
      "Wird die App für iOS, Android oder beide Plattformen entwickelt werden? Wenn sie für mehrere Plattformen entwickelt werden soll, wird dies den Preis erhöhen.</li>" +
      "<li>Berücksichtigen Sie das Design der App:<br/>" +
      "Wird das Design von Grund auf neu entwickelt werden müssen, oder gibt es bereits vorhandene Designs, die verwendet werden können? Ein umfangreiches, benutzerdefiniertes Design wird den Preis erhöhen.</li>" +
      "<li>Berücksichtigen Sie die Komplexität der Funktionen:<br/>" +
      "Je mehr Funktionen die App hat, desto teurer wird ihre Entwicklung sein. Berücksichtigen Sie auch, ob die App integriert werden muss mit bestehenden Systemen oder Datenbanken, da dies den Preis ebenfalls erhöhen wird.</li>" +
      "<li>Berücksichtigen Sie Benutzerauthentifizierung und Sicherheitsfunktionen:<br/>" +
      "Wird die App Benutzerauthentifizierung oder Sicherheitsfunktionen wie Verschlüsselung benötigen? Diese Funktionen können den Preis erhöhen.</li>" +
      "<li>Berücksichtigen Sie E-Commerce-Funktionalitäten:<br/>" +
      "Wird die App E-Commerce-Funktionalitäten enthalten, wie das Hinzufügen von Produkten zum Warenkorb oder das Durchführen von Zahlungen? Dies wird den Preis erhöhen.</li>" +
      "<li>Berücksichtigen Sie regelmäßige Updates und Wartung:<br/>" +
      "Wird es regelmäßige Updates oder Wartung der App geben, die in den Preis einbezogen werden müssen?</li>" +
      "<li>Berücksichtigen Sie die Leistungsanforderungen:<br/>" +
      "Gibt es besondere Anforderungen an die Leistung der App, wie zum Beispiel hohe Verarbeitungsgeschwindigkeit? Dies kann den Preis erhöhen.</li>" +
      "</ol>" +
      "</div>" +
      "</body>",
  };
  

  if(req.body.language == "en"){
    mailData = {
      from: "kontakt@m-to-b.com",
      to: req.body.email,
      bcc: "kontakt@m-to-b.com",
      subject: `Price estimation for your app - M-to-B`,
      text:
        "Good day,\n\n" +
        "we look forward to helping you plan your app.\n" +
        "Based on your information in the price calculator, we estimate the necessary budget for your app in the following price range:\n\n" +
        req.body.minPrice.toLocaleString("en-gb") +
        " € - " +
        req.body.maxPrice.toLocaleString("en-gb") +
        " €\n\n" +
        "Please note that this budget is only a rough preliminary estimate with little information.\n" +
        "We are happy to offer you a free 30 minutes consultation, in which you will be advised by an expert on your ideas and at the end you can receive a non-binding offer with the exact costs.\n\n" +
        "Arrange a free consultation now:\n" +
        `https://m-to-b.com/en/App-Preis-Rechner-Callback?mail=${req.body.email}&tag=${tag} \n\n` +
        "At the end of this email we will also give you a guide on how you can work out and estimate the development effort for your app in more detail.\n\n" +
        "For all other questions, we will be happy to help you at the address kontakt@m-to-b.com. Simply send us a message with your request.\n\n" +
        "We wish you every success in the further course of your project,\n" +
        "Kind regards,\n" +
        "Your M-to-B team\n\n\n" +
        "Development Effort Guide:\n\n" +
        "1. Gather information about the app's requirements and features:\n" +
        "Before you can calculate the app development price, you need a clear understanding of what the app is supposed to do and what features it will have. Ask questions to capture these needs and gather as much detail as possible.\n\n" +
        "2. Consider the platforms the app will be developed on:\n" +
        "Will the app be developed for iOS, Android or both platforms? If it is to be developed for multiple platforms, this will increase the price.\n\n" +
        "3. Consider the design of the app:\n" +
        "Will the design need to be developed from scratch, or are there existing designs that can be used? An extensive custom design will increase the price.\n\n" +
        "4. Consider the complexity of the features:\n" +
        "The more features the app has, the more expensive it will be to develop. Also consider if the app needs to be integrated with existing systems or databases as this will also increase the price.\n\n" +
        "5. Consider user authentication and security features:\n" +
        "Will the app require user authentication or security features like encryption? These features may increase the price.\n\n" +
        "6. Consider Ecommerce Functionalities:\n" +
        "Will the app include e-commerce functionality like adding products to the cart or making payments? This will increase the price.\n\n" +
        "7. Consider regular updates and maintenance:\n" +
        "Will there be regular updates or maintenance to the app that need to be factored into the price?\n\n" +
        "8. Consider the performance requirements:\n" +
        "Are there special requirements for the performance of the app, such as high processing speed? This can increase the price.\n\n",
      html:
        "<body>" +
        "<div style='font-size: 14px; font-weight: normal; font-family: Roboto, Helvetica, Aral, sans-serif;'>" +
        "<p>Good day,</p>" +
        "<p>we look forward to helping you plan your app.<br/>" +
        "Based on your information in the price calculator, we estimate the necessary budget for your app in the following price range:</p>" +
        "<p><strong>" +
        req.body.minPrice.toLocaleString("en-gb") +
        " € - " +
        req.body.maxPrice.toLocaleString("en-gb") +
        " €</strong></p>" +
        "<p>Please note that this budget is only a rough preliminary estimate with little information.<br/>" +
        "<p>We are happy to offer you a free 30 minutes consultation, in which you will be advised by an expert on your ideas and at the end you can receive a non-binding offer with the exact costs.</p>" +
        `<a href='https://m-to-b.com/en/App-Preis-Rechner-Callback?mail=${req.body.email}&tag=${tag}'><button style='font-size: inherit; padding: 8px; background-color: #022636; color: white; font-weight: bold; outline: none; border: none;'>Arrange a free consultation now!</button></a>` +
        "<p>At the end of this email we will also give you a guide on how you can work out and estimate the development effort for your app in more detail.</p>" +
        "<p>For all other questions, we will be happy to help you at the address kontakt@m-to-b.com. Simply send us a message with your request.</p>" +
        "<p>We wish you every success in the further course of your project,<br/>" +
        "Kind regards,<br/>" +
        "Your M-to-B team</p><br/>" +
        "<h1 style='font-size: inherit; font-weight: bold;'>Development Effort Guide:</h1>" +
        "<ol>" +
        "<li>Gather information about the app's requirements and features:<br/>" +
        "Before you can calculate the app development price, you need a clear understanding of what the app is supposed to do and what features it will have. Ask questions to capture these needs and gather as much detail as possible.</li>" +
        "<li>Consider the platforms the app will be developed on:<br/>" +
        "Will the app be developed for iOS, Android or both platforms? If it is to be developed for multiple platforms, this will increase the price.</li>" +
        "<li>Consider the design of the app:<br/>" +
        "Will the design need to be developed from scratch, or are there existing designs that can be used? An extensive custom design will increase the price.</li>" +
        "<li>Consider the complexity of the features:<br/>" +
        "The more features the app has, the more expensive it will be to develop. Also consider if the app needs to be integrated with existing systems or databases as this will also increase the price.</li>" +
        "<li>Consider user authentication and security features:<br/>" +
        "Will the app require user authentication or security features like encryption? These features may increase the price.</li>" +
        "<li>Consider Ecommerce Functionalities:<br/>" +
        "Will the app include e-commerce functionality like adding products to the cart or making payments? This will increase the price.</li>" +
        "<li>Consider regular updates and maintenance:<br/>" +
        "Will there be regular updates or maintenance to the app that need to be factored into the price?</li>" +
        "<li>Consider the performance requirements:<br/>" +
        "Are there special requirements for the performance of the app, such as high processing speed? This can increase the price.</li>" +
        "</ol>" +
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
