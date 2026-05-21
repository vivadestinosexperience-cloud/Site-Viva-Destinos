/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase environment variables are missing! ' +
    'Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are specified in your environment.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://lcbdndnoxxziqklexadb.supabase.co',
  supabaseAnonKey || 'dummy-key'
);
