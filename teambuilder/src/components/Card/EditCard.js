import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Card.scss';
import {useHistory} from 'react-router-dom';
function EditCard(props) {
    let history = useHistory()
	const { id, users, setUsers } = props;
	const [ user, setUser ] = useState([]);
	const { idx } = useParams();
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ role, setRole ] = useState('');
	const [ cohort, setCohort ] = useState('');

	useEffect(
		() => {
			setUser(users[idx]);
		},
		[idx],
    );
    
    const handleSubmit = e => {
        e.preventDefault()
        const user = {name: name, email: email, role: role, cohort: cohort}
        console.log(user)
        
        const filtered = users.splice(idx,1);
        const newUsers = [...filtered, user ]
        let localStorageUsers = JSON.stringify(newUsers);
		localStorage.setItem('users', localStorageUsers);
        setUsers(newUsers)
        history.push('/')
    }

	if (!user) {
		return <h1>Loading...</h1>;
	}
	return (
		<form onSubmit={e => handleSubmit(e)}>
			<input  placeholder={user.name} value={name} onChange={(e) => setName(e.target.value)}/>
			<input placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)} />
			<input placeholder={user.role} value={role} onChange={(e) => setRole(e.target.value)} />
            <input placeholder={user.cohort} value={cohort} onChange={(e) => setCohort(e.target.value)} />
            <button type="submit">Edit</button>
		</form>
	);
}

export default EditCard;
