// import { createServiceSupabaseClient } from "../config/supabaseClient";
// import { useState } from "react";
// import {
//   SupabaseClient,
//   useSupabaseClient,
// } from "@supabase/auth-helpers-react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [formError, setFormError] = useState(null);
//   const supabase = useSupabaseClient();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setFormError("Please fill in all the fields correctly");
//       return;
//     }

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password
//     });

//     if (error) {
//       console.log(error);
//       setFormError("Please fill in all the fields correctly");
//     }

//     if (data) {
//       console.log(data);
//       setFormError(null);
//     }
//   };

//   return (
//     <div className="page login">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="id">Email:</label>
//         <input
//           type="text"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />

//         <label htmlFor="name">Password:</label>
//         <input
//           type="text"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />

//         <button>Add data</button>

//         {formError && <p className="error">{formError}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
