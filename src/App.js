import React, { useState, useEffect }   from 'react';
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'


function App() {
    const [user, setUser] = useState('eed');

    useEffect(() => {
        document.title= user ? `${user}'s Feed`: 'Please login';
    }, [user]);

    if(!user){
        return <Login setUser={setUser} />
    }
    return (
        <>
        <Header user={user} setUser={setUser}/>
        <CreatePost  user={user} />
        </>
    )
}

export default App