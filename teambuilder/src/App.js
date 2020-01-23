import React, {useState} from 'react';
import './App.scss';
import Form from './components/Form/Form';
import { Route } from 'react-router-dom';
import EditCard from './components/Card/EditCard';
import Card from './components/Card/Card'

function App() {
    	const [ users, setUsers ] = useState([]);
	return (
		<div className='App'>
			<Route path='/' exact>
				<Form users={users} setUsers={setUsers} />
            </Route>
            <Route path="/card/edit/:idx">
                <EditCard  setUsers={setUsers} users={users}/>
            </Route>
		</div>
	);
}

export default App;
