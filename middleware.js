import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip under construction page itself and API routes
  if (pathname === '/under-construction' || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Redirect all other pages to under construction
  return NextResponse.redirect(new URL('/under-construction', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - under-construction (the construction page itself)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|under-construction).*)',
  ],
}
