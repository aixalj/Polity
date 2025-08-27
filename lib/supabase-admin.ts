// lib/supabase-admin.ts
import 'server-only'; // Prevents importing this file in client components
import { createClient } from '@supabase/supabase-js';

// Server-only: uses the service role key (never expose to the browser!)
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRole) {
  throw new Error(
    'Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL. ' +
    'Add them to Vercel envs (Preview + Production) and .env.local for dev.'
  );
}

export const supabaseAdmin = createClient(url, serviceRole, {
  auth: { persistSession: false },
});
