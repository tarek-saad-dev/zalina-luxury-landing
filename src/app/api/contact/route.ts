import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface ContactFormData {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  projectLocation?: string;
  numberOfUnits?: string;
  projectType: string;
  message?: string;
  honeypot?: string;
}

interface ValidationResult {
  valid: boolean;
  error?: string;
}

const MAX_MESSAGE_LENGTH = 2000;

function validateForm(data: ContactFormData): ValidationResult {
  const trimmedFullName = data.fullName?.trim();
  const trimmedPhone = data.phone?.trim();
  const trimmedEmail = data.email?.trim();
  const trimmedProjectType = data.projectType?.trim();

  if (!trimmedFullName || trimmedFullName.length < 2) {
    return {
      valid: false,
      error: "Full name is required (minimum 2 characters)",
    };
  }

  if (!trimmedPhone || trimmedPhone.length < 5) {
    return { valid: false, error: "Phone number is required" };
  }

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return { valid: false, error: "Valid email address is required" };
  }

  if (!trimmedProjectType) {
    return { valid: false, error: "Project type is required" };
  }

  // Spam protection: honeypot field should be empty
  if (data.honeypot && data.honeypot.trim() !== "") {
    return { valid: false, error: "Invalid submission" };
  }

  // Spam protection: message length limit
  if (data.message && data.message.length > MAX_MESSAGE_LENGTH) {
    return { valid: false, error: "Message is too long" };
  }

  return { valid: true };
}

function sanitizeInput(input: string | undefined): string {
  if (!input) return "N/A";
  // Remove any HTML tags and trim
  return input
    .replace(/<[^>]*>/g, "")
    .trim()
    .substring(0, 500);
}

function generateEmailTemplate(data: ContactFormData): string {
  const sanitizedData = {
    fullName: sanitizeInput(data.fullName),
    companyName: sanitizeInput(data.companyName),
    phone: sanitizeInput(data.phone),
    email: sanitizeInput(data.email),
    projectLocation: sanitizeInput(data.projectLocation),
    numberOfUnits: sanitizeInput(data.numberOfUnits),
    projectType: sanitizeInput(data.projectType),
    message: sanitizeInput(data.message),
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead - Zalina Luxury Bubble Tents</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
    <tr>
      <td style="padding: 40px 30px; background: linear-gradient(135deg, #1a150f 0%, #0d0906 100%); border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 24px; color: #C8A45D; font-weight: 600; text-align: center;">Zalina Luxury Bubble Tents</h1>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: #F6EFE4; text-align: center; opacity: 0.8;">New Lead Submission</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Full Name</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.fullName}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Company / Resort Name</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.companyName}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Phone Number</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.phone}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.email}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Project Location</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.projectLocation}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Number Of Units</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.numberOfUnits}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Project Type</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${sanitizedData.projectType}</p>
            </td>
          </tr>
          ${
            sanitizedData.message !== "N/A"
              ? `
          <tr>
            <td style="padding-bottom: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; font-size: 15px; color: #1a1a1a; line-height: 1.6;">${sanitizedData.message.replace(/\n/g, "<br>")}</p>
            </td>
          </tr>
          `
              : ""
          }
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px 30px; background-color: #f9f9f9; border-radius: 0 0 12px 12px; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #888; text-align: center;">Submitted via <a href="https://zalina-luxury.com" style="color: #C8A45D; text-decoration: none;">zalina-luxury.com</a></p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as ContactFormData;

    // Validate required fields
    const validation = validateForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 },
      );
    }

    // Get environment variables
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactReceiver = process.env.CONTACT_RECEIVER;

    if (!smtpEmail || !smtpPassword || !contactReceiver) {
      console.error("Missing SMTP configuration");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // Generate email HTML
    const emailHtml = generateEmailTemplate(body);

    // Send email
    const info = await transporter.sendMail({
      from: `"Zalina Contact Form" <${smtpEmail}>`,
      to: contactReceiver,
      subject: "New Lead - Zalina Luxury Bubble Tents",
      html: emailHtml,
      replyTo: body.email,
    });

    console.log("Email sent:", info.messageId);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 },
    );
  }
}
