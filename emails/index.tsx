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
    <Preview>Welcome to Kontentino GPT Apps Beta, {userFirstname}! 🚀</Preview>
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
          Welcome to Kontentino GPT Apps — the revolutionary ChatGPT integration
          that brings AI-powered content creation and instant approvals together.
          You're now on the list for exclusive early beta access!
        </Text>
        <Text style={paragraph}>
          <strong>What's coming:</strong> Generate social media posts in ChatGPT,
          see pixel-perfect platform previews, and share for instant approval —
          all without leaving your chat. We're launching with Post Preview first,
          followed by Content Calendar and Post List.
        </Text>
        <Text style={paragraph}>
          We'll notify you as soon as beta access opens. In the meantime, if you
          have questions, reply to{" "}
          <a href="mailto:support@kontentino.com" style={link}>
            this email
          </a>{" "}
          or learn more about{" "}
          <a href="https://www.kontentino.com" style={link}>
            Kontentino
          </a>
          .
        </Text>
        <Text style={signOff}>
          Stay creative,
          <br />
          The Kontentino Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for early access to
          Kontentino GPT Apps. Excited to have you on board!
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
