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

  const mailData = {
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
      "Für alle weiteren Fragen helfen wir Ihnenn sehr gerne unter der Adresse kontakt@m-to-b.com weiter. Schicken Sie uns dafür einfach eine Nachricht mit Ihrem Anliegen.\n\n\n" +
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
      "<div style='font-size: 14px; font-weight: normal; font-family: Roboto, Helvetica, Aral, sans-serif;'>" +
      "<p>Guten Tag,</p>" +
      "<p>wir freuen uns, Ihnen bei der Planung Ihrer App helfen zu können.<br/>" +
      "Basierend auf Ihren Angaben im Preis-Rechner schätzen wir das nötige Budget Ihrer App auf folgende Preisspanne ab:</p>" +
      "<p>" +
      req.body.minPrice.toLocaleString("de-de") +
      " € - " +
      req.body.maxPrice.toLocaleString("de-de") +
      " €</p>" +
      "<p>Beachten Sie bitte, dass dieses Budget nur eine grobe Vorabschätzung mit wenigen Angaben ist.<br/>" +
      "<p>Gerne bieten wir Ihnen ein kostenloses 30 minütiges Beratungsgespräch an, in dem Sie von einem Experten genau zu Ihren Vorstellungen beraten werden und am Ende ein unverbindliches Angebot mit den genauen Kosten erhalten können.</p>" +
      `<a href='https://m-to-b.com/App-Preis-Rechner-Callback?mail=${req.body.email}&tag=${tag}'><button>Jetzt kostenloses Beratungsgespräch vereinbaren!</button></a>` +
      "<p>Außerdem geben wir Ihnen am Ende dieser Mail noch einen Leitfaden, wie Sie ihr den Entwicklungs-Aufwand Ihrer App etwas genauer ausarbeiten und abschätzen können.</p>" +
      "<p>Für alle weiteren Fragen helfen wir Ihnenn sehr gerne unter der Adresse kontakt@m-to-b.com weiter. Schicken Sie uns dafür einfach eine Nachricht mit Ihrem Anliegen.</p><br/>" +
      "<p>Wir wünschen Ihnen viel Erfolg im weiteren Verlauf Ihres Projekt,<br/>" +
      "Mit freundlichen Grüßen,<br/>" +
      "Ihr Team von M-to-B</p>" +
      "<h1 style='font-size: inherit; font-weight: bold;'>Entwicklungs-Aufwand Leitfaden:</h1>" +
      "<ol>" +
      "<li>Sammeln Sie Informationen über die Anforderungen und Funktionen der App:<br/>" +
      "Bevor Sie den Preis für die App-Entwicklung berechnen können, benötigen Sie ein klares Verständnis davon, was die App tun soll und welche Funktionen sie haben wird. Stellen Sie Fragen, um diese Anforderungen zu erfassen, und sammeln Sie so viele Details wie möglich.</li>" +
      "<li>2. Berücksichtigen Sie die Plattformen, auf denen die App entwickelt werden soll:<br/>" +
      "Wird die App für iOS, Android oder beide Plattformen entwickelt werden? Wenn sie für mehrere Plattformen entwickelt werden soll, wird dies den Preis erhöhen.</li>" +
      "<li>3. Berücksichtigen Sie das Design der App:<br/>" +
      "Wird das Design von Grund auf neu entwickelt werden müssen, oder gibt es bereits vorhandene Designs, die verwendet werden können? Ein umfangreiches, benutzerdefiniertes Design wird den Preis erhöhen.</li>" +
      "<li>4. Berücksichtigen Sie die Komplexität der Funktionen:<br/>" +
      "Je mehr Funktionen die App hat, desto teurer wird ihre Entwicklung sein. Berücksichtigen Sie auch, ob die App integriert werden muss mit bestehenden Systemen oder Datenbanken, da dies den Preis ebenfalls erhöhen wird.</li>" +
      "<li>5. Berücksichtigen Sie Benutzerauthentifizierung und Sicherheitsfunktionen:<br/>" +
      "Wird die App Benutzerauthentifizierung oder Sicherheitsfunktionen wie Verschlüsselung benötigen? Diese Funktionen können den Preis erhöhen.</li>" +
      "<li>6. Berücksichtigen Sie E-Commerce-Funktionalitäten:<br/>" +
      "Wird die App E-Commerce-Funktionalitäten enthalten, wie das Hinzufügen von Produkten zum Warenkorb oder das Durchführen von Zahlungen? Dies wird den Preis erhöhen.</li>" +
      "<li>7. Berücksichtigen Sie regelmäßige Updates und Wartung:<br/>" +
      "Wird es regelmäßige Updates oder Wartung der App geben, die in den Preis einbezogen werden müssen?</li>" +
      "<li>8. Berücksichtigen Sie die Leistungsanforderungen:<br/>" +
      "Gibt es besondere Anforderungen an die Leistung der App, wie zum Beispiel hohe Verarbeitungsgeschwindigkeit? Dies kann den Preis erhöhen.</li>" +
      "</ol>" +
      "</div>",
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
