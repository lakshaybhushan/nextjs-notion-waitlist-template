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
    <Preview>Thanks for Joining Kontentino GPT Waitlist, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://kontentino.com/wp-content/uploads/2023/03/kontentino-logo.svg`}
          width="200"
          height="60"
          alt="Kontentino Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for Kontentino GPT Apps! We're excited
          to have you on board and appreciate your interest in our AI-powered
          social media management tools.
        </Text>
        <Text style={paragraph}>
          We'll keep you updated on our progress and notify you as soon as
          Kontentino GPT Apps is ready for early access. In the meantime, if you
          have any questions or feedback, don't hesitate to reach out by replying
          directly to{" "}
          <a href="mailto:support@kontentino.com" style={link}>
            this email
          </a>
          .
        </Text>
        <Text style={paragraph}>
          Want to learn more about Kontentino?{" "}
          <a href="https://kontentino.com" style={link}>
            Visit our website
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          The Kontentino Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Kontentino GPT
          Apps waitlist. If you believe this is a mistake, feel free to ignore
          this email.
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
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
