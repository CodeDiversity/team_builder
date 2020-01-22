import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Form.scss';

function Form() {
	const [ users, setUsers ] = useState([]);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ role, setRole ] = useState('');
	const [ cohort, setCohort ] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const user = { name: name, email: email, role: role, cohort: cohort };
		let updatedUsers = [ ...users, user ];
		let newUsers = JSON.stringify(updatedUsers);
		localStorage.setItem('users', newUsers);
		setUsers(updatedUsers);
    };
    
   

	console.log(users, 'users state');

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users) {
			setUsers(JSON.parse(users));
		}
	}, []);

	return (
		<div className='wrapper'>
			<form className='addForm' onSubmit={(e) => onSubmitHandler(e)}>
                <h1>Add A User </h1>
                <div className="inputs">
				<input required className="half" placeholder='name' name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
				<input required className="half" placeholder='email' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				<input required placeholder='role' name='role' type='text' value={role} onChange={(e) => setRole(e.target.value)} />
				<input required
					placeholder='cohort'
					name='cohort'
					type='text'
					value={cohort}
					onChange={(e) => setCohort(e.target.value)}
                />
                </div>
                <button type='submit'>Add Team Member</button>
			</form>
			<div className="team-members">
				{users.map((el, idx) => {
					return <Card key={idx} el={el} />;
				})}
			</div>
		</div>
	);
}
export default Form;
