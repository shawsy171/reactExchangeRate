import React from 'react'
import Form from './../components/form'
import Result from './../components/result'

class Exchange extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            baseCurrency: []
        }

        this.getRate = this.getRate.bind(this);
    }

    getRate (currency) {
        console.log(currency);
        const component = this;

        fetch(`http://api.fixer.io/latest?base=${currency}`)

            .then(function (response) {

                return response.json();
            }).then(function (data) {
                console.log(data);
                this.setState({ baseCurrency: data });

            }.bind(this)).catch(function (error) {
                console.log(error);
            });
    }

    render () {

        if (Object.keys(this.state.baseCurrency).length > 0 ) {
            var list = Object.keys(this.state.baseCurrency.rates);
        } else {
            var list = []
        }

        const currencyList = list.map((key, index) => {
            return (<Result key={index} country={key} rate={this.state.baseCurrency.rates[key]} />);
        })
        return (
            <div className={'row'}>
                <div className={'exchange--content'}>
                    <h1>Exchange Rate</h1>
                    <p>Please choose a country</p>
                    <Form getRate={this.getRate}/>

                    <table className={'exchange--table'}>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencyList}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Exchange;