import { createServiceSupabaseClient } from "../config/supabaseClient";
import { createServiceSupabaseAdmin } from "../config/supabaseAdmin";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const CreateUser = () => {
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

    const supabase = createServiceSupabaseAdmin();

    // Then we create the user.
    const { data: createdUser, error: createUserError } =
      await supabase.auth.admin.createUser({
        email: "elongatedmusk@gmail.com",
        password: "password",
        user_metadata: {
          initial_data: {
            fullname: "Elon Musk",
            companyid: 1,
          },
        },
        phone: "99999999",
        email_confirm: true,
      });

    if (createUserError) {
      console.log(createUserError);
      setFormError("Failed to create user");
    }

    if (createdUser) {
      console.log(createdUser);
      setFormError(null);
    }
  };

  return (
    <div className="page create">
      <h2>Creating User</h2>
      <form onSubmit={handleSubmit}>
        <button>Add User</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateUser;
