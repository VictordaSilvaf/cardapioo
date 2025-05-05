'use client';

import { createClient } from "@/utils/supabase/server";
import Aside from "../components/Aside";
import { fetchSubscriptionByEmail } from "@/lib/stripe";
import ProductItem from "../components/ProductItem";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "../components/ui/Heading";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GroupInput from "../components/GroupInput";
import { useState } from "react";

export default async function MenuPage() {
  const lanchesMcDonalds = [
    {
      title: "Big Mac",
      price: "R$ 29,99",
      ingredientes:
        "Sesame bun (3 parts), beef patties (2 pieces), shredded iceberg lettuce, processed cheese, sliced pickles, chopped onions, Big Mac special sauce",
      photo:
        "https://media.istockphoto.com/id/182198365/pt/foto/triplo-bacon-cheeseburger.jpg?s=2048x2048&w=is&k=20&c=Cgl6DI5kHMqoBZ_04PMRH9OJyGCOVnqbm6nn-MgyuAg=",
    },
    {
      title: "Quarter Pounder with Cheese",
      price: "R$ 59,99",
      ingredientes:
        "Sesame bun, large beef patty, two slices of cheddar cheese, sliced onions, pickles, ketchup, mustard",
      photo:
        "https://media.istockphoto.com/id/1406241638/pt/foto/hamburger-cheeseburger-fastfood-fast-food-isolated-on-a-white-background.jpg?s=2048x2048&w=is&k=20&c=M-0IUQ0tHUoZdYaTw_RFMyt-4hlgNE0osP2VOne7x_o=",
    },
    {
      title: "McChicken",
      price: "R$ 99,99",
      ingredientes:
        "Brioche-style bun, breaded chicken fillet, seasoned mayonnaise, shredded iceberg lettuce",
      photo:
        "https://media.istockphoto.com/id/1663861931/pt/foto/homemade-cheeseburger.jpg?s=2048x2048&w=is&k=20&c=RZMgqcqMuckFfJ9t37FNQJKa72FVamIyTOQR_fEAq_k=",
    },

    {
      title: "Cheeseburger",
      price: "R$ 24,50",
      ingredientes:
        "Regular bun, beef patty, slice of cheddar cheese, pickles, onions, ketchup, mustard",
      photo:
        "https://media.istockphoto.com/id/911229036/pt/foto/isolated-black-burger.jpg?s=2048x2048&w=is&k=20&c=pwjKb6aPSHmN3U-xqsflGhZ0zw_Pqoizjd0G1eQDLaM=",
    },
    {
      title: "Double Cheeseburger",
      price: "R$ 24,50",
      ingredientes:
        "Regular bun, two beef patties, two slices of cheddar cheese, pickles, onions, ketchup, mustard",
      photo:
        "https://media.istockphoto.com/id/2192351875/pt/foto/big-burger-on-white-background.jpg?s=2048x2048&w=is&k=20&c=6E9YpoGo1LvNLRC0-fZ_VfMd9IPxhsEMaFyDRcTtqVE=",
    },
    {
      title: "McFish (Filet-O-Fish)",
      price: "R$ 24,50",
      ingredientes:
        "Steamed bun, breaded fish fillet, slice of processed cheese, tartar sauce",
      photo:
        "https://media.istockphoto.com/id/1337209359/pt/foto/delicious-hamburger-with-beef-cutlet-vegetables-and-onions-isolated-on-a-white-background-fast.jpg?s=2048x2048&w=is&k=20&c=K5FzxrLfNyKU8TKZkmdislV8oeX5UhK41ZvZQcBKJYg=",
    },
    {
      title: "McBacon",
      price: "R$ 24,50",
      ingredientes:
        "Sesame bun, beef patty, bacon strips, slice of cheddar cheese, ketchup, mustard",
      photo:
        "https://media.istockphoto.com/id/1329621951/pt/foto/delicious-hamburger-with-beef-cutlet-vegetables-and-onions-isolated-on-a-white-background-fast.jpg?s=2048x2048&w=is&k=20&c=erfG-NN3-QcBJqSbNmlLrZtnZ9JlYRP7RM3o5V7IK_o=",
    },
  ];
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  const subscription = await fetchSubscriptionByEmail(user?.email ?? "");

  // if (!subscription) redirect("/dashboard/payment");

  const [name, setName] = useState<string>("");
  const [description, SheetDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  return (
    <Aside>
      <Heading
        title="Meus Produtos"
        rightContent={
          <Sheet>
            <SheetTrigger>
              <Button variant="destructive" className="rounded-full" size="lg">
                <PlusIcon size={16} />
                Adicionar novo
              </Button>
            </SheetTrigger>
            <SheetContent
              style={{ maxWidth: "670px" }}
              side="right"
              className="max-w-2xl w-full border border-gray-200"
            >
              <SheetHeader className="p-0">
                <SheetTitle className="border-b border-gray-200 p-5">
                  Novo Produto
                </SheetTitle>
                <div className="p-5">
                  <div className="flex flex-col gap-y-10">
                    <GroupInput value={name} setValue={setName} label="Nome" />
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        }
      />

      <ul className="mt-5 flex flex-col gap-y-3">
        {lanchesMcDonalds.map((item) => (
          <ProductItem
            key={item.title}
            name={item.title}
            ingredients={item.ingredientes}
            photo={item.photo}
            price={item.price}
          />
        ))}
      </ul>
    </Aside>
  );
}
