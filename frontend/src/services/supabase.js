import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://whjcbmywxubdzdgrhzak.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoamNibXl3eHViZHpkZ3JoemFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1Nzc2NDAsImV4cCI6MjA4OTE1MzY0MH0.z82p7bErRgvpQDTYtbsHcoIABaJQSJTco8SXs9Fcp48"

console.log("Conectando con Supabase...")

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

console.log("Conexión Supabase establecida")

