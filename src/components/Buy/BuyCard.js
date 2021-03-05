import React from 'react';
import { Button } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';
import './BuyCard.css'

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render(props) {
        return (
            <div className="payment" id="PaymentForm" >
                <Cards 
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    />
                <form style={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center"}}>
                    <img className="img" src="https://w7.pngwing.com/pngs/363/177/png-transparent-visa-mastercard-logo-visa-mastercard-computer-icons-visa-text-payment-logo.png"></img>
                    <input required className="payment__input card__number"
                        maxLength="16"
                        type="text"
                        name="number"
                        placeholder="Карта"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input required className="payment__input card__name"
                        type="text"
                        name="name"
                        placeholder="Владелец карты"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                        <input required className="payment__input card__expiry"
                            maxLength="4"
                            type="text"
                            name="expiry"
                            placeholder="ММ/ГГ"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    <input required className="payment__input card__cvc"
                        maxLength="3"
                        type="text"
                        name="cvc"
                        placeholder="код проверки"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </form>
                <div style={{display:'flex', justifyContent: 'center', marginBottom: '40px'}}>
                   <Link to='/'>
                     <Button className="pay__btn" type="submit">PAY</Button>
                   </Link>
                </div>
            </div>

        );
    }
}