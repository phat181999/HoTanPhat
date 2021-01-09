import React, { Component } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements, CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import axios from "axios";
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async event => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });
        if (!error) {
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post("/api/charge", { id, amount: 1099 });
                console.log(data);

            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", margin: "0 auto" }}
        >
            <h2>Price: $10.99 USD</h2>
            <img
                src="https://images.ricardocuisine.com/services/recipes/500x675_7700.jpg"
                style={{ maxWidth: "50px" }}
            />
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
      </button>
        </form>
    )
}
const stripePromise = loadStripe("pk_test_51I0TT8HjF02vcO1sn09k8ZYy3NdOil1vEuUW2xSJmwCDMIDktH4487DVzgt6sSsN3giGOvGx3GYkQDzxNPy6h3zc00i6NAuuoh");

const Stripe = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Stripe;