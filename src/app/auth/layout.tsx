import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()

    //   Redireciona para o dashboard caso logado
    if (data.user && !error) {
        redirect('/dashboard')
    }

    return <>{children}</>
}
