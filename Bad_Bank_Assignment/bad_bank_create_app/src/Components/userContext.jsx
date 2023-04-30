import React from 'react';

const UserContext = 
	React.createContext({
		user: {},
		setUserContext: () => {}
	});

export default UserContext;