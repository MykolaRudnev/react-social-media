import React, {useState}from 'react';

function Login({setUser}) {
    const [usernmae, setUsername] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        setUser(usernmae)
    } 

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                onChange={event => setUsername(event.target.value)} 
                placeholder='Input username'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login