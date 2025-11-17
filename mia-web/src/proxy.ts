import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/.well-known/oauth-authorization-server(.*)',
  '/.well-known/oauth-protected-resource(.*)',
  '/mcp(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return // Allow public access to .well-known endpoints
  console.log("here", req.headers)
  await auth.protect() // Protect all other routes
  auth.protect
  console.log("passed")
})
