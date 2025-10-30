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
    <Preview>Welcome to Kontentino ChatGPT App, {userFirstname}! 🚀</Preview>
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
          Welcome to <strong>Kontentino ChatGPT App</strong> — you're now on the list for exclusive early beta access!
        </Text>
        <Text style={paragraph}>
          <strong>Create in ChatGPT. Approve with Kontentino.</strong>
        </Text>
        <Text style={paragraph}>
          Finally—generate posts, preview them perfectly, and share for approval without the tool-switching headache.
          We're launching with <strong>Content Calendar</strong> first, followed by Post Preview and Post List.
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
          Stay in your creative flow,
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
  backgroundColor: "#f5f7fa",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 20px",
};

const container = {
  margin: "0 auto",
  padding: "40px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto 32px",
  display: "block",
};

const greeting = {
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: "600",
  color: "#1f2937",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
  color: "#374151",
};

const link = {
  color: "#647ef2",
  textDecoration: "none",
  fontWeight: "500",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "32px",
  color: "#374151",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const footer = {
  color: "#6b7280",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "center" as const,
};
