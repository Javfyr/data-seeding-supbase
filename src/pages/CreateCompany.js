import supabase from "../config/supabaseClient"
import { useState } from 'react'

const CreateCompany = () => {

  const [id, setId] = useState('');
  const [created_at, setCreatedAt] = useState('');
  const [visible, setVisible] = useState(null);
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!id || !created_at  || !visible || !website || !name || !bio){
      setFormError('Please fill in all the fields correctly')
      return
    }

    const { data, error } = await supabase
      .from('companies')
      .insert([{id, name, created_at, bio, website, visible}])

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
      <h2>Seeding Companies Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Id:</label>
        <input
          type='text'
          id='id'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />

        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        <label htmlFor='bio'>Bio:</label>
        <input
          type='text'
          id='bio'
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <br />

        <label htmlFor='website'>Website:</label>
        <input
          type='text'
          id='website'
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <br />

        <label htmlFor='visible'>Visible:</label>
        <input
          type='text'
          id='visible'
          value={visible}
          onChange={(e) => setVisible(e.target.value)}
        />
        <br />

        <button>Add data</button>

        {formError && <p className="error">{formError}</p>}
      </form>

    </div>
  )
}

export default CreateCompany