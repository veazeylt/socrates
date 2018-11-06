import React, { Component } from 'react'

class Output extends React.Component {
	state = {}
	render() {
		const { rpName, noRpName } = this.props
		return (
			<div style={{width: 400}}>
				<h1>
					ARE YOU READY? <strong>{rpName}</strong>
				</h1>
			
			</div>
		)
	}
}

export default Output
