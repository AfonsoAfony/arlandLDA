import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pqydqnwpufrbiukdkwii.supabase.co" //API DATA: Project URL  
const supabaseKey = "sb_publishable_KaLlcxY9QvbiMA9q3aXe2A_AXyAPiVq" //API KEYS: Published key
export const supabase = createClient(supabaseUrl, supabaseKey)