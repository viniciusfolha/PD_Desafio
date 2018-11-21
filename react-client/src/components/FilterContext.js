import React from 'react';

export const FilterContext = React.createContext({
	filter: '',
	changeFilter: (event) => {},
});
