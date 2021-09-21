import React from "react";
import { observer } from "mobx-react";
import Entries from "./Entries";
import entriesStore from "../EntriesStore";

@observer
class List extends React.Component {
	filter(e) {
		this.props.store.filter = e.target.value;
	}

	createEntry(e) {
		var data = {
			'destination': e.target.parentNode.childNodes[0].value, 
			'country'    : e.target.parentNode.childNodes[1].value, 
			'rating'     : e.target.parentNode.childNodes[2].value
		};

		this.props.store.createEntry(data);
	}

	render() {
		var tableRows;

		const {entries, filteredEntries, filter} = this.props.store;

		if(entries !== null && entries.length > 0)
		{
			//tableRows = entries.map(function(item) {
			tableRows = filteredEntries.map(function(item) {
				return <Entries item={item} store={entriesStore} />
			});
		}

		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>

				<label>Search: </label>
				<input value={filter} onChange={this.filter.bind(this)} />

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
							{tableRows}
						</tbody>										
					</table>
				</div>
				
				<div className='row'>
					<input type='text' name='destination' /> 
					<input type='text' name='country' /> 
					<input type='text' name='rating' /> 
					<button type='button' onClick={this.createEntry.bind(this)}>New</button>
				</div>

			</div>
		);
	}
}

export default List;
