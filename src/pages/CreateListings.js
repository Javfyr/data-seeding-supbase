import { createServiceSupabaseClient } from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { createServiceSupabaseAdmin } from "../config/supabaseAdmin";

const CreateListings = () => {
  const [id, setId] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [expiry, setExpiry] = useState("");
  const [token, setToken] = useState("");
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const signIn = async () => {
      const supabase = createServiceSupabaseClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "ahtan@gmail.com",
        password: "12345",
      });
      if (error) {
        console.log(error);
      }

      if (data) {
        console.log(data);
      }
    };

    const result = signIn().catch(console.error);

    console.log(result);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !id ||
      !created_at ||
      !name ||
      !email ||
      !company ||
      !expiry ||
      !token
    ) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    // Prepare the supabase client.
    const supabase = createServiceSupabaseAdmin();

    const { data, error } = await supabase
      .from("invite")
      .insert([{ id, created_at, name, email, company, expiry, token }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly");
    }

    if (data) {
      console.log(data);
      setFormError("Data has successfully been inserted into the table");
    }
  };

  return (
    <div className="page create">
      <h2>Seeding invite Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />

        <label htmlFor="created_at">created_at:</label>
        <input
          type="text"
          id="created_at"
          value={created_at}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <br />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br />

        <label htmlFor="expiry">Expiry:</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <br />

        <label htmlFor="token">Token:</label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <br />

        <button>Add data</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateListings;
