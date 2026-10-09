import { NextResponse } from 'next/server';
import { chapters } from '@/lib/brands';

function asText(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const text = value.trim();
  if (text.length === 0 || text.length > max) return null;
  return text;
}

export async function POST(req: Request) {
  const to = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!to || !apiKey) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const name = asText(fields.name, 120);
  const email = asText(fields.email, 254);
  const interest = asText(fields.interest, 40);
  const message = asText(fields.message, 5000);
  if (
    !name ||
    !email ||
    !interest ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const topic = chapters.find((c) => c.id === interest)?.name ?? interest;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    'Crystal Kizor website <onboarding@resend.dev>';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry from ${name} (${topic})`,
        text: [`Name: ${name}`, `Email: ${email}`, `Topic: ${topic}`, '', message].join(
          '\n',
        ),
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
