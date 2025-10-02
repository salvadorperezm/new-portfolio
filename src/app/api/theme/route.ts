import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const value = searchParams.get('value') || 'dark';

  const res = NextResponse.json({ ok: true });

  res.cookies.set('theme', value, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
  });

  return res;
}
