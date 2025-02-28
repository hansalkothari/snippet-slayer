import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ibojgptoxxqnbiekuyqx.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlib2pncHRveHhxbmJpZWt1eXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NDE2NDgsImV4cCI6MjA1NjMxNzY0OH0.z-7JYx_Pkz-ELwENtMUWcoD51NUzJz2qbFVWnVNgVzM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 