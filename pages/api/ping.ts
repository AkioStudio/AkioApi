import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function CryptoEdgeAPIRoute(request: NextRequest) {
  return new Response(
    JSON.stringify({ code: 418, context: 'pong' }),
    { status: 418 , headers: { 'Content-Type': 'application/json' } }
  );
};
