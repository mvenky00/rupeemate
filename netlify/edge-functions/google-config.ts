export default function googleConfig(request: Request): Response | void {
  if (request.method !== 'GET') return;

  const clientId = (Netlify.env.get('GOOGLE_CLIENT_ID') || '').trim();
  if (!/^[a-z0-9-]+\.apps\.googleusercontent\.com$/i.test(clientId)) return;

  return Response.json({ clientId }, { headers: { 'Cache-Control': 'no-store' } });
}

export const config = { path: '/google-config.json' };
