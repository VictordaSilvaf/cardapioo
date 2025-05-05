import 'server-only'
// 'use client'
import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
    throw new Error('Missing STRIPE_SECRET_KEY');
}

export const stripe = new Stripe(secretKey)

export async function fetchSubscriptionByEmail(email: string) {
    const customers = await stripe.customers.list({
        limit: 1,
        email: email,
        expand: ['data.subscriptions']
    })

    if (customers.data.length === 0) return null

    const customer = customers.data[0]

    if (customer.subscriptions?.data.length === 0) return null

    const subscriptions = customer.subscriptions?.data[0]

    return subscriptions
}