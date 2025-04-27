'use client'

import React, { useCallback } from "react";
import { loadStripe } from '@stripe/stripe-js'

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'

function classNames(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

type PaymentButtonProps = {
    tier: {
        href: string;
        featured: boolean;
        id: string;
    },
    children: React.ReactNode
}

export default function PaymentButton({ tier, children }: Readonly<PaymentButtonProps>) {
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
    )

    const fetchClientSecret = useCallback(async () => {
        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data.client_secret;
    }, [])

    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    aria-describedby={tier.id}
                    className={classNames(
                        tier.featured
                            ? 'bg-vermilion-600 shadow-xs hover:bg-vermilion-500 focus-visible:outline-vermilion-600'
                            : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                        'rounded-md px-3 w-full py-2 text-center text-sm/6 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 duration-300',
                    )}
                >
                    {children}
                </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[80vh] overflow-y-auto p-1">
                <DialogTitle>Realizar assinatura</DialogTitle>
                <div className="">
                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{ fetchClientSecret }}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                </div>
            </DialogContent>
        </Dialog>
    )
}