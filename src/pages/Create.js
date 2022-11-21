import supabase from "../config/supabaseClient"
import { useState } from 'react'

const Create = () => {

//   const id = 30;
//   const created_at = '2022-01-01 08:00:00+08';
//   const visible = 1;
//   const website = 'https://www.himetal.com.sg/';
//   const name = 'HiMetal Enterprise Pte Ltd';
//   const bio = 'HiMetal Enterprise specialises in supplying Stainless Steel products in Singapore. We supply a wide range of flat and long products to our valued customers for    '
//   return `${id},${created_at},${visible},${website},${name},${bio}`;


  const [id, setId] = useState('');
  const [created_at, setCreatedAt] = useState('');
  const [visible, setVisible] = useState(null);
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!id || !visible || !website || !name || !bio){
      setFormError('Pleasee fill in all the fields correctly')
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
      <h2>Seeding Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Id:</label>
        <input
          type='text'
          id='id'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='created_at'>created_at:</label>
        <input
          type='text'
          id='created_at'
          value={created_at}
          onChange={(e) => setCreatedAt(e.target.value)}
        />

        <label htmlFor='bio'>Bio:</label>
        <input
          type='text'
          id='bio'
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label htmlFor='website'>Website:</label>
        <input
          type='text'
          id='website'
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label htmlFor='visible'>Visible:</label>
        <input
          type='text'
          id='visible'
          value={visible}
          onChange={(e) => setVisible(e.target.value)}
        />

        <button>Add data</button>

        {formError && <p className="error">{formError}</p>}
      </form>

    </div>
  )
}

export default Create