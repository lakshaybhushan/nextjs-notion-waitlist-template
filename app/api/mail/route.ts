import { render } from "@react-email/render"

import WelcomeTemplate from "../../../emails"

import { Resend } from "resend"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)



export async function POST(request: NextRequest, response: Response) {
  const { email, firstname } = await request.json()

  const { data, error } = await resend.emails.send({
    from: "Lakshay <hello@m2j.lakshb.dev>",
    to: [email],
    subject: "Thankyou for waitlisting morph2json!",
    html: render(WelcomeTemplate({ userFirstname: firstname})),
  })

  if (error) {
    return Response.json(error)
  }

    return Response.json({message: "Email sent successfully"})
}
