const {data} = await supabase
.from("encuentros")
.select("*")