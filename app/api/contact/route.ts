import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600;width:180px;vertical-align:top">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-line">${escapeHtml(value)}</td></tr>`;
}

function table(rows: string[]) {
  return `<table style="font-family:sans-serif;font-size:14px;color:#333;border-collapse:collapse;width:100%;max-width:600px">${rows.join("")}</table>`;
}

export async function POST(request: NextRequest) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!to) {
    return NextResponse.json(
      { error: "CONTACT_TO_EMAIL not configured" },
      { status: 500 }
    );
  }

  let payload: Record<string, unknown>;

  try {
    payload = ((await request.json()) ?? {}) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const text = (value: unknown, max = 2000) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";

  const email = text(payload.email, 200);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  let subject: string;
  let html: string;

  if (payload.type === "consultation") {
    const firstName = text(payload.firstName, 120);
    const lastName = text(payload.lastName, 120);
    const phone = text(payload.phone, 40);

    if (!firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: "First name, last name, email, and phone are required" },
        { status: 400 }
      );
    }

    const selectedServices = Array.isArray(payload.services)
      ? payload.services
          .filter((item): item is string => typeof item === "string")
          .map((item) => `• ${item.slice(0, 120)}`)
          .join("\n")
      : "";

    subject = `Consultation request from ${firstName} ${lastName}`;
    html = `
    <h2 style="font-family:sans-serif;color:#1a1a1a">New consultation request — Cura Health Collective</h2>
    ${table([
      row("Name", `${firstName} ${lastName}`),
      row("Email", email),
      row("Phone", phone),
      row("Services", selectedServices || "None selected"),
      row("Preferred contact", text(payload.preferredContact, 40) || "—"),
      row("Preferred appointment", text(payload.preferredTime, 40) || "—"),
      row("Patient status", text(payload.patientStatus, 40) || "—"),
      row("Message", text(payload.message, 5000) || "—"),
    ])}
  `;
  } else {
    const name = text(payload.name, 120);

    if (!name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    subject = `New inquiry from ${name}`;
    html = `
    <h2 style="font-family:sans-serif;color:#1a1a1a">New inquiry — Cura Health Collective</h2>
    ${table([
      row("Name", name),
      row("Email", email),
      row("Phone", text(payload.phone, 40) || "—"),
      row("Message", text(payload.message, 5000) || "—"),
    ])}
  `;
  }

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
