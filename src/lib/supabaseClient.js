import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://smmaezbgljbcomfgzsve.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtbWFlemJnbGpiY29tZmd6c3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4MDI1MzIsImV4cCI6MTk5MzM3ODUzMn0.5m24dV0iR7uRn8AC17WTN8OmELgrJ2KpNwxsBtb0GGg')