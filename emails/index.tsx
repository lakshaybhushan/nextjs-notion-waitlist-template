import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components"
import * as React from "react"

interface morph2jsonEmailProps {
  userFirstname: string
}

export const morph2jsonWaitlistEmail = ({
  userFirstname,
}: morph2jsonEmailProps) => (
  <Html>
    <Head />
    <Preview>Thankyou for signing up for the morph2json waitlist!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://imgur.com/nBBzEMt.png"
          width="220"
          height="40"
          alt="morph2json logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for morph2json! I'm Lakshay, the
          developer working on this tool. I'm excited you're interested and I'm
          putting in the effort to make morph2json as useful as possible for
          you.
        </Text>

        <Text style={paragraph}>
          I'll keep you updated on progress and let you know the second it's
          ready to use. If you have any questions or feedback, feel free to
          reply directly to{" "}
          <a
            href="mailto:
          lakshb.work@gmail.com"
            style={{ color: "#F7FF9B" }}>
            this email
          </a>
          — I'm all ears!
        </Text>

        <Text style={paragraph}>
          For updates, you can also follow me on X/Twitter: {""}
          <a href="https://x.com/blakssh" style={{ color: "#F7FF9B" }}>
            @blakssh
          </a>
        </Text>

        <Text style={paragraph}>
          Best,
          <br />
          Lakshay
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You are receiving this email because you signed up for the morph2json
          waitlist. If you believe this is a mistake, please ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

morph2jsonWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as morph2jsonEmailProps

export default morph2jsonWaitlistEmail

const main = {
  backgroundColor: "#FCFFD5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: "#cccccc",
}

const container = {
  margin: "0 auto",
  padding: "20px 24px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
}

const logo = {
  margin: "0  auto",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
}
