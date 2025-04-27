import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
                {
                    quantity: 1,
                    price: process.env.STRIPE_PRICE_ID_MENSAL
                }
            ],
            mode: 'subscription',
            payment_method_types: ['card'],
            return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({
            id: session.id,
            client_secret: session.client_secret
        });
    } catch (e) {
        return NextResponse.json(e, { status: 400 })
    }
}