import supabase from "../config/supabaseClient";
import { useState } from "react";

const CreateUser = () => {
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.admin.createUser({
      email: "javier@gmail.com",
      password: "password",
      user_metadata: {
        // Initial data will be used to populate the user's profile within
        // the trigger that creates the ums.user record.
        initial_data: {
          fullname: "Fok Yanrui Javier",
          companyid: 4,
        },
        invite_token: "bhuv3cvgygffggyftvgyttfc",
      },
      phone: "22224444",
      email_confirm: true,
    });

    if (error) {
      console.log(error);
      setFormError("Failed to create user");
    }

    if (data) {
      console.log(data);
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
