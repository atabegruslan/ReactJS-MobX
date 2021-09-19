import React from 'react';

class Entries extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.item.destination}</td>
				<td>{this.props.item.country}</td>
				<td>{this.props.item.rating}</td>
			</tr>
		);
	}
}

export default Entries;
