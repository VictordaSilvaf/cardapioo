'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,

} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const primaryFeatures = [
  {
    name: 'Publicação rápida de novos pratos.',
    description: 'Adicione novos pratos ao seu cardápio em poucos cliques, de forma prática e eficiente.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Segurança e backup automático.',
    description: 'Seus dados estão sempre protegidos com backups automáticos e segurança de ponta.',
    icon: LockClosedIcon,
  },
  {
    name: 'Suporte direto no painel.',
    description: 'Conte com suporte rápido e eficiente diretamente no painel de controle.',
    icon: ServerIcon,
  },
  {
    name: 'Analytics: saiba o que os clientes mais acessam.',
    description: 'Descubra quais pratos são os favoritos dos seus clientes com análises detalhadas.',
    icon: ServerIcon,
  },
]
const secondaryFeatures = [
  {
    name: 'Publicação instantânea',
    description:
      'Adicione ou atualize pratos no seu cardápio em tempo real, garantindo que seus clientes sempre vejam as opções mais recentes.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Certificados de segurança',
    description:
      'Mantenha os dados do seu restaurante e dos seus clientes protegidos com certificados SSL e segurança de ponta.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Gestão simplificada',
    description:
      'Gerencie seu cardápio de forma prática e intuitiva, com ferramentas que facilitam o dia a dia do seu restaurante.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const featuredTestimonial = {
  body: 'Sempre tive dificuldades em organizar meu cardápio, mas com essa solução tudo ficou mais fácil e prático. Recomendo a todos os restaurantes!',
  author: {
    name: 'Ana Silva',
    handle: 'anasilva',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Essa plataforma mudou completamente a forma como apresentamos nossos pratos. Os clientes adoram!',
        author: {
          name: 'Carlos Oliveira',
          handle: 'carlosoliveira',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'A experiência 3D é incrível! Meus clientes ficaram impressionados com a inovação.',
        author: {
          name: 'Mariana Souza',
          handle: 'marianasouza',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Nunca foi tão fácil gerenciar meu cardápio. A interface é intuitiva e prática.',
        author: {
          name: 'João Pereira',
          handle: 'joaopereira',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'O suporte é excelente! Sempre que precisei, fui atendido rapidamente.',
        author: {
          name: 'Fernanda Lima',
          handle: 'fernandalima',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes: (string | string[])[]) {
  return classes.flat().filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="">
      <main className='bg-neutral-100'>
        {/* Hero section */}
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-semibold text-vermilion-600">Em desenvolvimento</span>
                  <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                  <a href="#" className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Aguarde para novas atualizações
                    <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
                  </a>
                </div>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                Uma nova forma de apresentar seu cardápio ao mundo
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Deixe seus pratos brilharem com descrições, fotos incríveis e uma experiência em 3D direto na câmera do cliente. Um menu digital como você nunca viu antes.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/auth/login">
                  <Button>
                    Comece agora
                  </Button>
                </Link>
                <Link href="/prices">
                  Ver planos <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl relative">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect rx={36} width={316} height={684} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#343E4E"
                />
                <foreignObject
                  width={316}
                  height={684}
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  transform="translate(24 24)"
                  className='relative'
                >
                  <Image
                    alt=""
                    src={"/dash.jpeg"}
                    width={316}
                    height={684}
                    className='h-full object-cover relative'
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-pampas-300 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                  Tudo o que você precisa pra deixar seu cardápio impecável
                </h2>
                <p className="mt-6 text-lg/8 text-white">
                  Nosso sistema é pensado pra facilitar o dia a dia do restaurante, da criação até a exibição do menu para o cliente.
                </p>
              </div>
              <Image
                alt="Product screenshot"
                src="/dashWeb.jpg"
                width={2432}
                height={1442}
                className="relative -z-20 max-w-xl min-w-full rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-pampas-800">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-vermilion-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline text-white">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0 lg:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-vermilion-600">Facilidade e rapidez</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Tudo o que você precisa para gerenciar seu cardápio
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Simplifique a gestão do seu restaurante com ferramentas práticas e intuitivas. Crie, edite e publique seu cardápio digital em poucos cliques.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="size-5 flex-none text-vermilion-600" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm/6 font-semibold text-vermilion-600">
                        Saiba mais <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-pampas-300 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Quer ser um dos primeiros a testar?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-white">
              Estamos quase prontos! Deixe seu e-mail e receba uma notificação quando lançarmos oficialmente.
            </p>

            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Digite seu e-mail"
                autoComplete="email"
                className="bg-white"
              />
              <Button
                type="submit"
              >
                Notifique-me
              </Button>
            </form>

            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate mt-32 sm:mt-56 sm:pt-32">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 hidden size-full [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 sm:block"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="ml-[-22rem] aspect-1313/771 w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base/7 font-semibold text-vermilion-600">Depoimentos de nossos clientes</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
                  Mais de 100 restaurantes já aprovaram!
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl/8 font-semibold tracking-tight text-gray-900">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <Image
                      alt=""
                      src={featuredTestimonial.author.imageUrl}
                      className="size-10 flex-none rounded-full bg-gray-50"
                      width={40}
                      height={40}
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">{featuredTestimonial.author.name}</div>
                      <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                    </div>
                    {/* <Image alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" height={40} width={40} /> */}
                  </figcaption>
                </figure>

                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8',
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <Image
                                alt=""
                                src={testimonial.author.imageUrl}
                                className="size-10 rounded-full bg-gray-50"
                                height={40}
                                width={40}
                              />
                              <div>
                                <div className="font-semibold">{testimonial.author.name}</div>
                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
