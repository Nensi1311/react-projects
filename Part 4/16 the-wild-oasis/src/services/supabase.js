import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iymgvqsbhhlwtdelxwza.supabase.co";
const supabaseKey = "sb_publishable_ZzX8q0HSwa31JQaHo86Oyg_bylLvSh_";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
