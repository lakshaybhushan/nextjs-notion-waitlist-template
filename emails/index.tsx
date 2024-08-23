import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      Thank you for signing up for the Next.js + Notion waitlist template!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${process.env.NEXT_PUBLIC_APP_URL}/waitlist-logo.png`}
          width="220"
          height="40"
          alt="Notion Waitlist Logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for our Next.js + Notion CMS waitlist
          template! I'm Lakshay, the developer behind this project. I'm glad
          that you're interested in using it.
        </Text>
        <Text style={paragraph}>
          I'll keep you posted on the progress and notify you as soon as it's
          ready for you to use. In the meantime, if you have any questions or
          feedback, don't hesitate to reach out by replying directly to{" "}
          <a href="mailto:lakshb.work@gmail.com" style={{ color: "#F7FF9B" }}>
            this email{" "}
          </a>
          — I'm here to listen!
        </Text>
        <Text style={paragraph}>
          You can also follow me on X/Twitter for updates:{" "}
          <a href="https://x.com/blakssh" style={{ color: "#F7FF9B" }}>
            @blakssh
          </a>
        </Text>
        <Text style={paragraph}>
          Best regards,
          <br />
          Lakshay
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Notion waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  backgroundColor: "#FCFFD5",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "20px 24px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
