import { createClient } from "@/utils/supabase/server";
import Aside from "../components/Aside"
import { fetchSubscriptionByEmail } from "@/lib/stripe";
import { redirect } from "next/navigation";

export default async function MenuPage() {
    const supabase = createClient();
    const {
        data: { user },
    } = await (await supabase).auth.getUser()

    const subscription = await fetchSubscriptionByEmail(user?.email ?? '')

    if (!subscription) redirect("/dashboard/payment");

    return (
        <Aside />
    )
}
