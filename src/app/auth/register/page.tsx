import { signup } from "../login/actions";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-pampas-200">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="flex justify-center items-center">
                        <Logo />
                    </div>
                    <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-pampas-900">
                        Crie sua conta agora mesmo
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                    Nome completo
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-vermilion-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Endereço de e-mail
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-vermilion-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Senha
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="new-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-vermilion-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                                    Confirme sua senha
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        required
                                        autoComplete="new-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-vermilion-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    formAction={signup}
                                    type="submit"
                                    className="w-full">
                                    Criar conta
                                </Button>
                            </div>
                        </form>
                    </div>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Já possui uma conta?{' '}
                        <Link href={'/auth/login'} className="cursor-pointer font-semibold text-vermilion-600 hover:text-vermilion-500">
                            Entrar
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}