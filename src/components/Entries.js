import React from 'react';

class Entries extends React.Component {

	updateEntry(e) {
		var data = {
			'destination': e.target.parentNode.parentNode.childNodes[0].innerText, 
			'rating'     : e.target.parentNode.childNodes[0].value
		};

		this.props.store.updateEntry(data);
	}

	deleteEntry(e) {
		var data = {
			'destination': e.target.parentNode.parentNode.childNodes[0].innerText
		};

		this.props.store.deleteEntry(data);
	}

	render() {
		return (
			<tr>
				<td>{this.props.item.destination}</td>
				<td>{this.props.item.country}</td>
				<td>
					<input type='text' name='rating' defaultValue={this.props.item.rating} />
					<button type='button' onClick={this.updateEntry.bind(this)}>Edit</button>
					<button type='button' onClick={this.deleteEntry.bind(this)}>Delete</button>
				</td>
			</tr>
		);
	}
}

export default Entries;
