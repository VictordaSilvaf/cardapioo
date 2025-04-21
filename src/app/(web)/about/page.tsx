'use client'

import Image from "next/image"

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, useGLTF } from '@react-three/drei'
// import { Suspense } from 'react'
// import { GridHelper } from 'three'

// function Model() {
//   const { scene } = useGLTF('/models/coffee_cup.glb')

//   console.log('Modelo carregado:', scene)

//   return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />
// }

// function Grid() {
//   return <primitive object={new GridHelper(10, 10)} />
// }

{/* <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <directionalLight position={[10, 10, 5]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas> */}

// import { useState } from 'react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Pedidos realizados diariamente', value: '5 mil' },
  { label: 'Cardápios personalizados criados', value: '12 mil' },
  { label: 'Usuários ativos mensalmente', value: '25 mil' },
]
const values = [
  {
    name: 'Inovação',
    description:
      'Buscamos constantemente inovar para oferecer a melhor experiência digital no setor gastronômico, conectando tecnologia e sabor.',
  },
  {
    name: 'Qualidade',
    description:
      'Nosso compromisso é entregar uma plataforma de alta qualidade, garantindo uma experiência fluida e envolvente para nossos usuários.',
  },
  {
    name: 'Personalização',
    description:
      'Acreditamos que cada pessoa é única, por isso oferecemos ferramentas para personalizar cardápios e criar experiências exclusivas.',
  },
  {
    name: 'Sustentabilidade',
    description:
      'Promovemos práticas sustentáveis, incentivando o uso consciente de recursos e contribuindo para um futuro melhor.',
  },
  {
    name: 'Acessibilidade',
    description:
      'Nosso objetivo é tornar a experiência gastronômica digital acessível a todos, independentemente de suas habilidades ou dispositivos.',
  },
  {
    name: 'Paixão pela gastronomia',
    description:
      'Somos apaixonados por gastronomia e queremos compartilhar essa paixão com nossos usuários, criando momentos inesquecíveis.',
  },
]
const team = [
  {
    name: 'Michael Foster',
    role: 'Co-Fundador / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Ana Oliveira',
    role: 'Co-Fundadora / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Carlos Pereira',
    role: 'Designer de Experiência do Usuário',
    imageUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Mariana Silva',
    role: 'Desenvolvedora Frontend',
    imageUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]
const blogPosts = [
  {
    id: 1,
    title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function About() {
  return (
    <main className="isolate bg-neutral-100">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  Transformando a forma como você aprecia o cardápio
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                  Nosso objetivo é oferecer uma experiência única e inovadora para explorar cardápios de forma digital.
                  Descubra novos sabores, personalize suas escolhas e aproveite uma jornada gastronômica inesquecível.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={528}
                      width={396}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={528}
                      width={396}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={528}
                      width={396}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={528}
                      width={396}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={528}
                      width={396}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nossa missão</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                Nosso projeto busca revolucionar a forma como as pessoas interagem com cardápios digitais, trazendo
                praticidade e inovação para o setor gastronômico. Com uma interface intuitiva e recursos avançados,
                queremos transformar a experiência de explorar e personalizar suas escolhas culinárias.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                Acreditamos que a tecnologia pode aproximar as pessoas da gastronomia de maneira única. Nosso objetivo
                é oferecer uma plataforma que permita aos usuários descobrir novos sabores, criar combinações
                personalizadas e compartilhar suas experiências de forma simples e envolvente. Junte-se a nós nessa
                jornada para redefinir o futuro dos cardápios digitais.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          className="aspect-5/2 w-full object-cover xl:rounded-3xl"
          height={528}
          width={396}
        />
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nossos valores</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Nosso projeto é dedicado a transformar a experiência gastronômica, oferecendo uma plataforma digital que
            conecta pessoas a sabores únicos e personalizados. Acreditamos que a tecnologia pode enriquecer a forma
            como exploramos e interagimos com cardápios, tornando cada refeição uma experiência memorável.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Logo cloud */}
      <div className="relative isolate -z-10 mt-32 sm:mt-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg aria-hidden="true" className="h-[40rem] w-[80rem] flex-none stroke-gray-200">
            <defs>
              <pattern
                x="50%"
                y="50%"
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Confiado pelas equipes mais inovadoras do mundo
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nosso time</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Somos uma equipe apaixonada por inovação e comprometida em transformar a experiência gastronômica. Nosso
            objetivo é criar soluções digitais que conectem pessoas a sabores únicos, proporcionando uma jornada
            culinária inesquecível.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {team.map((person) => (
            <li key={person.name}>
              <Image alt="" src={person.imageUrl} className="mx-auto size-24 rounded-full"
                height={528}
                width={396} />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm/6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Direto do nosso blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Descubra como nosso projeto pode transformar a experiência gastronômica, conectando pessoas a sabores únicos e personalizados.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
            >
              <Image
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 -z-10 size-full object-cover"
                height={528}
                width={396}
              />

              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image alt="" src={post.author.imageUrl} className="size-6 flex-none rounded-full bg-white/10"
                      height={528}
                      width={396}
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
