import React from 'react';

class Form extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            baseCurrency: []
        }
    }

    componentDidMount () {
        const component = this;

        fetch('http://api.fixer.io/latest?base=USD')

            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                this.setState({ baseCurrency: data });
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
    }

    onSubmit (e) {
        e.preventDefault();
        console.log(this.refs.country.value);
        var country = this.refs.country.value;

        this.props.getRate(country);
    }

    render () {

        if (Object.keys(this.state.baseCurrency).length > 0 ) {
            var list = Object.keys(this.state.baseCurrency.rates);
        } else {
            var list = []
        }
        var countryList = list.map((key, index) => {
            return (<option key={index} value={key}>{key}</option>);
        })

        return (
            <form className={'exchange--form'} onSubmit={this.onSubmit.bind(this)}>
                <select name="countryRate" ref={'country'}>
                    {countryList}
                </select>
                <button className={'btn'}>Select</button>
            </form>
        )
    }


}

export default Form;