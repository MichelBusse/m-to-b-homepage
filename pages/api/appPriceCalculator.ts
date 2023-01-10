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
        text: req.body.text + "Hallo, hier bitte, dein preis: " + req.body.minPrice + "€ - " + req.body.maxPrice + "€",
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