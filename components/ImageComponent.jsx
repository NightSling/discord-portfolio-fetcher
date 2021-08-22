import axios from "axios";
import { useEffect, useState } from 'react';
import Image from './Image';

export default function ImageComponent() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/getData').then(resp => {
			setData(resp.data);
			console.log(resp.data);
		});
	}, []);

	return (
		<div>
			{ 
				data.map((product) => { return <Image imageurl={product}/> })
			}
		</div>
	);

}