import Logo from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

export default function CheckoutReturnPage() {
    return (
        <div id="checkout">
            <div className="mx-auto w-full flex justify-center items-center mb-8">
                <Logo />
            </div>

            <Card className="max-w-lg text-center">
                <CardContent>
                    <CardHeader>
                        <ShoppingBagIcon className="text-emerald-500 mx-auto mb-4 h-12 w-12" />
                        <CardTitle>Assinatura Confirmada</CardTitle>
                        <CardDescription>Obrigado por se juntar a nós!</CardDescription>
                    </CardHeader>
                    <div className="text-neutral-700 mt-6 text-sm">
                        <p>Sua assinatura foi processada com sucesso e já está ativa</p>
                        <p>Agora só cadastrar seu cardápio</p>

                        <Link href='/dashboard' className={cn(buttonVariants(), 'mt-12')}>
                            Ir para o Dashboard
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}