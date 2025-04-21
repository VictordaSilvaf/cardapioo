import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Header from '@/components/Header'

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/auth/login')
    }

    return (
        <>
            <Header />
            <div className="pt-24 bg-neutral-100 min-h-screen h-full">
                {children}
            </div>
        </>
    )
}