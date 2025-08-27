// lib/supabase-browser.ts
import { createClient } from '@supabase/supabase-js';

// Client/browser: ONLY uses the public anon key.
// These must be defined in .env.local (dev) and on Vercel (Preview/Production).
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!url || !anon) {
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. ' +
    'Set them in .env.local and Vercel → Project → Settings → Environment Variables.'
  );
}

export const supabase = createClient(url, anon);
