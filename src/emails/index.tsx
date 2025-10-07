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

export const PraediaEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Willkommen bei praedia, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          className="mx-auto my-0"
          src={`https://praedia.com/brand-asset-01.svg`}
          alt="praedia Logo"
          width="120"
          height="24"
        />
        <Text style={greeting}>Hallo {userFirstname},</Text>
        <Text style={paragraph}>
          Vielen Dank für Ihr Interesse an praedia! Wir freuen uns, Sie dabei zu haben.
        </Text>
        <Text style={paragraph}>
          Unser Team wird sich in Kürze bei Ihnen melden. Bei Fragen können Sie uns jederzeit
          direkt per E-Mail kontaktieren.
        </Text>
        <Text style={signOff}>
          Beste Grüße,
          <br />
          Das praedia Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Sie haben diese E-Mail erhalten, weil Sie sich für praedia registriert haben.
          Falls dies ein Fehler war, können Sie diese E-Mail ignorieren.
        </Text>
      </Container>
    </Body>
  </Html>
);

PraediaEmail.PreviewProps = {
  userFirstname: "Max",
} as EmailProps;

export default PraediaEmail;

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
