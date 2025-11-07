import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // List of protected routes that require authentication
  const protectedRoutes = [
    "/account",
    "/orders",
    "/profile",
    "/wishlist",
    "/wholesale/dashboard",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If route is protected and no token exists, redirect to login
  if (isProtectedRoute && !token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // If token exists, verify it
  if (token) {
    try {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT_SECRET is not defined");
      }

      // Verify the token
      const decoded = jwt.verify(token, secret);

      // Add user info to request headers for use in API routes/pages
      const response = NextResponse.next();
      response.headers.set("x-user-id", (decoded as any).userId);
      response.headers.set("x-user-role", (decoded as any).role || "customer");

      return response;
    } catch (error) {
      // Token is invalid, clear it and redirect to login if on protected route
      const response = isProtectedRoute
        ? NextResponse.redirect(new URL("/login", request.url))
        : NextResponse.next();

      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
