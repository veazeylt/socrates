import React, { Component } from 'react'

class Output extends React.Component {
	state = {}
	render() {
		const { rpName, noRpName } = this.props
		return (
			<div style={{width: 400}}>
				<h1> ARE YOU READY? </h1>
				<p>
					Any Student: <strong>{rpName}</strong>
				</p>
				<p>
					Previously Uncalled Student:
					<strong> {noRpName}</strong>
				</p>
			
			</div>
		)
	}
}

export default Output
