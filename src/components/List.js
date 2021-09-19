import React from "react";
import { observer } from "mobx-react";
import Entries from "./Entries";

@observer
class List extends React.Component {
	render() {
		var entries;

		if(this.props.store.entries !== null && this.props.store.entries.length > 0)
		{
			entries = this.props.store.entries.map(function(item){
				return <Entries item={item} />
			});
		}

		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>

				<div className='row'>
					<table className='table'>
						<thead>
							<tr>
								<th>Destination</th>
								<th>Country</th>
								<th>Rating</th>
							</tr>
						</thead>
						<tbody>
							{entries}
						</tbody>										
					</table>
				</div>
				
			</div>
		);
	}
}

export default List;
