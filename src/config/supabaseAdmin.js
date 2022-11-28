import { createClient } from '@supabase/supabase-js';

export function createServiceSupabaseAdmin() {
  const supabaseAdmin = createClient(
    "https://rvndpcxlgtqfvrxhahnm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bmRwY3hsZ3RxZnZyeGhhaG5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODg0OTIxMSwiZXhwIjoxOTg0NDI1MjExfQ.sucBQ8km_9oEEcXFcGWx7YZNXQUyOr4ifrzya76zhSU"
    );
  return supabaseAdmin;
}
