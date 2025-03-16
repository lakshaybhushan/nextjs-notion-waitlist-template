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
    <Preview>Thanks for Joining the Learnrithm AI v2 Waitlist, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://aiteacher.learnrithmm.com/Logomark.svg`}
          width="100"
          height="100"
          alt="Learnrithm AI Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for Learnrithm AI v2! We're excited to have you on board as we prepare to launch our next generation of AI-powered learning tools.
        </Text>
        <Text style={paragraph}>
          The new version comes with a cleaner UI and powerful new features including our AI Voice Tutor, Study Mode, Quiz Mode, and more. We'll notify you as soon as it's ready, along with your exclusive 1-month FREE access!
        </Text>
        <Text style={paragraph}>
          Have questions or feedback? Feel free to reach out directly at{" "}
          <a href="mailto:support@learnrithm.com" style={link}>
            support@learnrithm.com
          </a>
          . We'd love to hear from you!
        </Text>
        <Text style={paragraph}>
          Stay updated by following us on social media:{" "}
          <a href="https://x.com/learnrithmai" style={link}>
            @learnrithmai
          </a>{" "}
          or{" "}
          <a href="https://instagram.com/learnrithm" style={link}>
            @learnrithm
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          The Learnrithm AI Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Learnrithm AI v2 waitlist.
          If you believe this is a mistake, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "User",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #1877F2 0%, #1877F2 48%, #1877F2 100%)",
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
  color: "#1877F2",
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