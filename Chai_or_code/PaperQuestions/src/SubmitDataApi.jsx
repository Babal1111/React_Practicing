import { useState } from 'react';

const SubmitDataApi = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Submitted Data:', data);
      setTitle('');
      setBody('');
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
        
          <label className="block mb-2">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 w-full h-32"
          />
       
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default  SubmitDataApi;