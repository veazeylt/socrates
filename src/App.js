import React, { Component } from 'react'
import Output from './output'
import img from './pic.png'
const initList = ['Amy', 'Louis','Bishka', 'Kristine', 'Emma', 'Lucas', 'Martin', 'Lucy', 'Michael', 'Josh']
const getRandom = ( Max) => {
    var Min = 0
	var Range = Max - Min
	var Rand = Math.random()
	var num = Min + Math.round(Rand * Range)
	return num
}
class App extends React.Component {
	state = {
		noRpList: initList,
        rpList: initList,
        rpName: '',
        noRpName: '',
        rpMap: {}
	}
	hanleRpClick = () => {
        const {rpList,rpMap} = this.state
        const index = getRandom(rpList.length - 1)
        const name = rpList[index]
        if(!name) {
            return
        }
        const times = rpMap[name]
        this.setState({
            rpName: name
        })
        if(times) {
            rpMap[name] = times + 1
            alert(name + ' has been called ' + (times + 1) + ' times!')
        }else {
            rpMap[name] = 1
        }
        this.setState({
            rpMap,
        })
    }
	handleNoRpClick = () => {
        const {noRpList} = this.state
        if(noRpList.length === 0) {
            alert('All student have been called once before!')
        }
        const index = getRandom(noRpList.length - 1)
        const name = noRpList[index]
        noRpList.splice(index,1)
        this.setState({
            noRpName: name,
            noRpList
        })
    }
    hadnleReset = () => {
        this.setState({
            noRpList: initList,
            rpList: initList,
            rpName: '',
            noRpName: '',
            rpMap: {}
        })
    }
	render() {
        const {rpName,noRpName} = this.state
        const btnStyle = {
            width: 300,
            marginTop: 15,
            height: 35,
            cursor: 'pointer',
            background: '#1890ff',
            border: '1px solid #ddd',
            color: 'white',
        }
		return (
            <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                <div style={{display: 'flex'}}>
                    <img src={img} alt="" width="300" height="300" />
                    <div style={{ marginLeft: 30, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <Output rpName={rpName} noRpName={noRpName}></Output>
                        <div>
                            <button style={btnStyle} onClick={this.hanleRpClick}>Any Student</button> <br />
                            <button style={{ ...btnStyle, background: '#e6a23c'}} onClick={this.handleNoRpClick}> Previously Uncalled Student</button> <br />
                            <button style={{ ...btnStyle, background: '#f56c6c'}} onClick={this.hadnleReset}> Reset</button>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}

export default App
