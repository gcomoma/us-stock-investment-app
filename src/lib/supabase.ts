
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bnunqxzeiudgguuchxqq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudW5xeHplaXVkZ2d1dWNoeHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5MjU2MDAsImV4cCI6MjA0NjUwMTYwMH0.placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);