import { createServiceSupabaseClient } from "../config/supabaseClient";
import { useState, useEffect } from 'react'

const CreateCompanyComments = () => {

  const [id, setId] = useState('');
  const [created_at, setCreatedAt] = useState('');
  const [companyid, setCompanyId] = useState(null);
  const [comments, setComments] = useState('');
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
    e.preventDefault()

    if(!id || !created_at || !companyid || !comments){
      setFormError('Please fill in all the fields correctly')
      return
    }

    const supabase = createServiceSupabaseClient();

    const { data, error } = await supabase
      .from('companies_comments')
      .insert([{id, created_at, companyid, comments}])

      if(error){
        console.log(error);
        setFormError('Please fill in all the fields correctly')
      }

      if(data){
        console.log(data)
        setFormError(null)
      }
  }

  return (
    <div className="page create">
      <h2>Seeding Companies_comments Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Id:</label>
        <input
          type='text'
          id='id'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />

        <label htmlFor='created_at'>created_at:</label>
        <input
          type='text'
          id='created_at'
          value={created_at}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <br />

        <label htmlFor='companyid'>Company Id:</label>
        <input
          type='text'
          id='bio'
          value={companyid}
          onChange={(e) => setCompanyId(e.target.value)}
        />
        <br />

        <label htmlFor='comments'>Comments:</label>
        <input
          type='text'
          id='comments'
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <br />

        <button>Add data</button>

        {formError && <p className="error">{formError}</p>}
      </form>

    </div>
  )
}

export default CreateCompanyComments