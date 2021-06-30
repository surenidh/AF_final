import React, {useEffect, useState} from 'react';

function ViewResearch(){
	
	const [researches, setResearch] = useState ([{
		title: '',
		description: ''
	
	}])

	useEffect(() => {
		fetch("/viewResearch").then(res => {
		if(res.ok){
			return res.json();
		}
		
	}).then(jsonRes => setResearch(jsonRes));
	})

	return <div className="container">
		{researches.map(research =>
			<div>
			<h1>{research.title}</h1>
			<p>{research.description}</p>
			</div>
		)}
	</div>
}

export default ViewResearch;