import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, phone, services, preferredDate, preferredTime, message } =
    await request.json();

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!to) {
    return NextResponse.json(
      { error: "CONTACT_TO_EMAIL not configured" },
      { status: 500 }
    );
  }

  const servicesList =
    services?.length > 0
      ? services.map((s: string) => `• ${s}`).join("\n")
      : "None selected";

  const html = `
    <h2 style="font-family:sans-serif;color:#1a1a1a">New appointment request — Cura Health Collective</h2>
    <table style="font-family:sans-serif;font-size:14px;color:#333;border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600;width:180px">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${phone || "—"}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600;vertical-align:top">Services</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-line">${servicesList}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Preferred date</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${preferredDate || "—"}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Preferred time</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${preferredTime || "—"}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600;vertical-align:top">Message</td><td style="padding:8px 12px">${message || "—"}</td></tr>
    </table>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      subject: `New appointment request from ${name}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
