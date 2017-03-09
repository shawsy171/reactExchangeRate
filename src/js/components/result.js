import React from 'react'

class Result extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <tr>
                <td>{this.props.country}</td>
                <td>{this.props.rate}</td>
            </tr>
        )
    }
}

export default Result;