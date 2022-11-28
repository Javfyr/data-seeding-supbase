import {createServiceSupabaseClient} from "../config/supabaseClient"

const Home = () => {
  console.log(createServiceSupabaseClient)
  
  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  )
}

export default Home