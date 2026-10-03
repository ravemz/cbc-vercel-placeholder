import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUPABASE_UNIQUE_VIOLATION = "23505";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const email = typeof (body as { email?: unknown })?.email === "string"
    ? (body as { email: string }).email.trim().toLowerCase()
    : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("waitlist_signups")
    .insert({ email, source: "landing_page" });

  if (error) {
    if (error.code === SUPABASE_UNIQUE_VIOLATION) {
      return NextResponse.json({ ok: true, message: "You're already on the list — we'll be in touch." });
    }
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "You're on the list! We'll email you when it's your turn." });
}
