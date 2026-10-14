import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
      console.error("API_URL is not configured.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 },
      );
    }

    const response = await fetch(`${apiUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const setCookies = response.headers.getSetCookie();
    const tokenCookie = setCookies.find((cookie) =>
      cookie.startsWith("token="),
    );

    if (!tokenCookie) {
      console.error("Sign-in response did not contain a token cookie.");
      return NextResponse.json(
        { error: "Unable to establish an admin session." },
        { status: 502 },
      );
    }

    const cookiePair = tokenCookie.split(";")[0];
    const token = cookiePair.slice("token=".length);

    if (!token) {
      return NextResponse.json(
        { error: "Unable to establish an admin session." },
        { status: 502 },
      );
    }

    const result = NextResponse.json(data);

    result.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return result;
  } catch (error) {
    console.error("Sign-in proxy failed:", error);

    return NextResponse.json(
      { error: "Unable to connect to the server." },
      { status: 500 },
    );
  }
}
