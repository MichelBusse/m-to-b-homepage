import { NextApiRequest, NextApiResponse } from "next"

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp',
    port: 25
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mailData = {
        from: 'kontakt@m-to-b.com',
        to: req.body.email,
        bcc: 'kontakt@m-to-b.com',
        subject: `Preisabschätzung für Ihre App - M-to-B`,
        text: "Guten Tag,\n\n"
        + "wir freuen uns, Ihnen bei der Planung Ihrer App helfen zu können."
        + "\nBasierend auf Ihren Angaben im Preis-Rechner schätzen wir das nötige Budget Ihrer App auf folgende Preisspanne ab:\n\n"
        + req.body.minPrice.toLocaleString('de-de') + " € - " + req.body.maxPrice.toLocaleString('de-de') + " €\n\n"
        + "Beachten Sie bitte, dass dieses Budget nur eine grobe Vorabschätzung mit wenigen Angaben ist.\n"
        + "Gerne bieten wir Ihnen ein kostenloses 30 minütiges Beratungsgespräch an, in dem Sie von einem Experten genau zu Ihren Vorstellungen beraten werden und am Ende ein unverbindliches Angebot mit den genauen Kosten erhalten können.\n\n"
        + "<button>Jetzt kostenloses Beratungsgespräch vereinbaren!</button>\n\n"
        + "Außerdem geben wir Ihnen am Ende dieser Mail noch einen Leitfaden, wie Sie ihr App-Konzept etwas genauer ausarbeiten und abschätzen können.\n\n"
        + "Für alle weiteren Fragen helfen wir Ihnenn sehr gerne unter der Adresse kontakt@m-to-b.com weiter. Schicken Sie uns dafür einfach eine Nachricht mit Ihrem Anliegen.\n\n\n"
        + "Wir wünschen Ihnen viel Erfolg im weiteren Verlauf Ihres Projekt,\n"
        + "Mit freundlichen Grüßen,\n"
        + "Ihr Team von M-to-B\n\n\n"
        + "App-Konzept Leitfaden:\n\n",
    }

    let mailRes = await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                resolve(false)
                console.log(err)
            } else {
                resolve(true)
            }
        })
    })

    if(mailRes){
        res.status(200).end()
    }else{
        res.status(500).end()
    }
}