import React, {useEffect, useState} from 'react';

function ViewWorkshop(){
	
	const [workshops, setWorkshops] = useState ([{
		title: '',
		description: ''
	
	}])

	useEffect(() => {
		fetch("/viewworkshops").then(res => {
		if(res.ok){
			return res.json();
		}
		
	}).then(jsonRes => setWorkshops(jsonRes));
	})

	return <div className="container">
		{workshops.map(workshop =>
			<div>
			<h1>{workshop.title}</h1>
			<p>{workshop.description}</p>
			</div>
		)}
	</div>
}

export default ViewWorkshop;