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
        <Text style={paragraph}>Hey! {userFirstname},</Text>
        <Text style={paragraph}>
          Thank you so much for joining the waitlist for morph2json. Your
          support means a lot to me. I am dedicated to making morph2json the
          best tool for your requirements. I will update you on the progress and
          let you know as soon as it is ready for you to use.
        </Text>

        <Text style={paragraph}>
          If you have any questions or feedback, feel free to reply to{" "}
          <a
            href="mailto:
          lakshb.work@gmail.com"
            style={{ color: "#F7FF9B" }}>
            this email
          </a>
          . I'd love to hear from you.
        </Text>

        <Text style={paragraph}>
          Make sure to follow me on X/Twitter for the updates{" "}
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
