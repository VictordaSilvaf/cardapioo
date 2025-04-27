'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Label } from '@radix-ui/react-label'
import PaymentButton from '@/components/PaymentButton'

const pricing = {
  frequencies: [
    { value: 'monthly' as const, label: 'Mensal' },
    { value: 'annually' as const, label: 'Anual' },
  ],
  tiers: [
    {
      name: 'Iniciante',
      id: 'tier-iniciante',
      href: '#',
      featured: false,
      description: 'Tudo o que você precisa para começar.',
      price: { monthly: 'R$19', annually: 'R$199' },
      highlights: ['Domínios personalizados', 'Entrega de conteúdo na borda', 'Análises avançadas'],
    },
    {
      name: 'Escala',
      id: 'tier-escala',
      href: '#',
      featured: true,
      description: 'Flexibilidade adicional para escalar.',
      price: { monthly: 'R$99', annually: 'R$999' },
      highlights: [
        'Domínios personalizados',
        'Entrega de conteúdo na borda',
        'Análises avançadas',
        'Workshops trimestrais',
        'Login único (SSO)',
        'Suporte prioritário por telefone',
      ],
    },
    {
      name: 'Crescimento',
      id: 'tier-crescimento',
      href: '#',
      featured: false,
      description: 'Todos os extras para sua equipe em crescimento.',
      price: { monthly: 'R$49', annually: 'R$499' },
      highlights: ['Domínios personalizados', 'Entrega de conteúdo na borda', 'Análises avançadas', 'Workshops trimestrais'],
    },
  ],
  sections: [
    {
      name: 'Recursos',
      features: [
        { name: 'Entrega de conteúdo na borda', tiers: { Iniciante: true, Crescimento: true, Escala: true } },
        { name: 'Domínios personalizados', tiers: { Iniciante: '1', Crescimento: '3', Escala: 'Ilimitado' } },
        { name: 'Membros da equipe', tiers: { Iniciante: '3', Crescimento: '20', Escala: 'Ilimitado' } },
        { name: 'Login único (SSO)', tiers: { Iniciante: false, Crescimento: false, Escala: true } },
      ],
    },
    {
      name: 'Relatórios',
      features: [
        { name: 'Análises avançadas', tiers: { Iniciante: true, Crescimento: true, Escala: true } },
        { name: 'Relatórios básicos', tiers: { Iniciante: false, Crescimento: true, Escala: true } },
        { name: 'Relatórios profissionais', tiers: { Iniciante: false, Crescimento: false, Escala: true } },
        { name: 'Construtor de relatórios personalizados', tiers: { Iniciante: false, Crescimento: false, Escala: true } },
      ],
    },
    {
      name: 'Suporte',
      features: [
        { name: 'Suporte online 24/7', tiers: { Iniciante: true, Crescimento: true, Escala: true } },
        { name: 'Workshops trimestrais', tiers: { Iniciante: false, Crescimento: true, Escala: true } },
        { name: 'Suporte prioritário por telefone', tiers: { Iniciante: false, Crescimento: false, Escala: true } },
        { name: 'Tour de onboarding 1:1', tiers: { Iniciante: false, Crescimento: false, Escala: true } },
      ],
    },
  ],
}
const faqs = [
  {
    id: 1,
    question: 'Quais são os benefícios de cada plano?',
    answer:
      'Cada plano oferece recursos específicos para atender às necessidades do seu negócio. Consulte a tabela de comparação para mais detalhes.',
  },
  {
    id: 2,
    question: 'Posso mudar de plano a qualquer momento?',
    answer:
      'Sim, você pode mudar de plano a qualquer momento diretamente no painel de administração.',
  },
  {
    id: 3,
    question: 'Existe algum período de teste gratuito?',
    answer:
      'Sim, oferecemos um período de teste gratuito de 14 dias para todos os planos.',
  },
  // Mais perguntas...
]

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Prices() {
  const [frequency, setFrequency] = useState<{ value: 'monthly' | 'annually'; label: string }>(pricing.frequencies[0])

  return (
    <div className="bg-neutral-100">
      <main>
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-pampas-300 py-16 sm:pt-32 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-pampas-800 sm:text-6xl">
                  Planos que se adaptam ao seu negócio
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-white sm:text-xl/8">
                  Escolha um plano acessível e repleto de recursos para engajar seus clientes, fidelizar seu público e aumentar suas vendas.
                </p>
                <div className="mt-16 flex justify-center">
                  <fieldset aria-label="Payment frequency">
                    <RadioGroup
                      value={frequency.value}
                      onValueChange={(value) =>
                        setFrequency(pricing.frequencies.find((option) => option.value === value)!)
                      }
                      className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white"
                    >
                      {pricing.frequencies.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className="cursor-pointer rounded-full px-2.5 py-1 data-[state=checked]:bg-pampas-800"
                          />
                          <Label htmlFor={option.value} className="text-white cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
              </div>
              <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  aria-hidden="true"
                  className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-pampas-800/80 lg:ring-1 lg:ring-white/10"
                />
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                        : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                      'relative rounded-2xl',
                    )}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <h2
                        id={tier.id}
                        className={classNames(
                          tier.featured ? 'text-gray-900' : 'text-white',
                          'text-sm/6 font-semibold',
                        )}
                      >
                        {tier.name}
                      </h2>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className="mt-2 flex items-center gap-x-4">
                          <p
                            className={classNames(
                              tier.featured ? 'text-gray-900' : 'text-white',
                              'text-4xl font-semibold tracking-tight',
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                          <div className="text-sm">
                            <p className={tier.featured ? 'text-gray-900' : 'text-white'}>BRL</p>
                            <p
                              className={tier.featured ? 'text-gray-500' : 'text-white/80'}
                            >{`Cobrança ${frequency.label}`}</p>
                          </div>
                        </div>
                        <PaymentButton tier={tier} >Escolher este plano</PaymentButton>
                      </div>
                      <div className="mt-8 flow-root sm:mt-10">
                        <ul
                          className={classNames(
                            tier.featured
                              ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                              : 'divide-white/5 border-white/5 text-white',
                            '-my-2 divide-y border-t text-sm/6 lg:border-t-0',
                          )}
                        >
                          {tier.highlights.map((mainFeature) => (
                            <li key={mainFeature} className="flex gap-x-3 py-2">
                              <CheckIcon
                                aria-hidden="true"
                                className={classNames(
                                  tier.featured ? 'text-vermilion-600' : 'text-pampas-200',
                                  'h-6 w-5 flex-none',
                                )}
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-gray-50 lg:pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              {/* Feature comparison (up to lg) */}
              <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                <h2 id="mobile-comparison-heading" className="sr-only">
                  Comparação de recursos
                </h2>

                <div className="mx-auto max-w-2xl space-y-16">
                  {pricing.tiers.map((tier) => (
                    <div key={tier.id} className="border-t border-gray-900/10">
                      <div
                        className={classNames(
                          tier.featured ? 'border-pampas-600' : 'border-transparent',
                          '-mt-px w-72 border-t-2 pt-10 md:w-80',
                        )}
                      >
                        <h3
                          className={classNames(
                            tier.featured ? 'text-pampas-600' : 'text-gray-900',
                            'text-sm/6 font-semibold',
                          )}
                        >
                          {tier.name}
                        </h3>
                        <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                      </div>

                      <div className="mt-10 space-y-10">
                        {pricing.sections.map((section) => (
                          <div key={section.name}>
                            <h4 className="text-sm/6 font-semibold text-gray-900">{section.name}</h4>
                            <div className="relative mt-6">
                              {/* Fake card background */}
                              <div
                                aria-hidden="true"
                                className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-xs sm:block"
                              />

                              <div
                                className={classNames(
                                  tier.featured ? 'ring-2 ring-pampas-600' : 'ring-1 ring-gray-900/10',
                                  'relative rounded-lg bg-white shadow-xs sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                                )}
                              >
                                <dl className="divide-y divide-gray-200 text-sm/6">
                                  {section.features.map((feature) => (
                                    <div
                                      key={feature.name}
                                      className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                    >
                                      <dt className="pr-4 text-gray-600">{feature.name}</dt>
                                      <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                        {typeof feature.tiers[tier.name as keyof typeof feature.tiers] === 'string' ? (
                                          <span
                                            className={
                                              tier.featured ? 'font-semibold text-pampas-600' : 'text-gray-900'
                                            }
                                          >
                                            {feature.tiers[tier.name as keyof typeof feature.tiers]}
                                          </span>
                                        ) : (
                                          <>
                                            {feature.tiers[tier.name as keyof typeof feature.tiers] === true ? (
                                              <CheckIcon
                                                aria-hidden="true"
                                                className="mx-auto size-5 text-pampas-600"
                                              />
                                            ) : (
                                              <XMarkIconMini
                                                aria-hidden="true"
                                                className="mx-auto size-5 text-gray-400"
                                              />
                                            )}

                                            <span className="sr-only">
                                              {feature.tiers[tier.name as keyof typeof feature.tiers] === true ? 'Yes' : 'No'}
                                            </span>
                                          </>
                                        )}
                                      </dd>
                                    </div>
                                  ))}
                                </dl>
                              </div>

                              {/* Fake card border */}
                              <div
                                aria-hidden="true"
                                className={classNames(
                                  tier.featured ? 'ring-2 ring-pampas-600' : 'ring-1 ring-gray-900/10',
                                  'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                                )}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Feature comparison (lg+) */}
              <section aria-labelledby="comparison-heading" className="hidden lg:block">
                <h2 id="comparison-heading" className="sr-only">
                  Comparação de recursos
                </h2>

                <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
                  {pricing.tiers.map((tier) => (
                    <div key={tier.id} aria-hidden="true" className="-mt-px">
                      <div
                        className={classNames(
                          tier.featured ? 'border-pampas-600' : 'border-transparent',
                          'border-t-2 pt-10',
                        )}
                      >
                        <p
                          className={classNames(
                            tier.featured ? 'text-pampas-600' : 'text-gray-900',
                            'text-sm/6 font-semibold',
                          )}
                        >
                          {tier.name}
                        </p>
                        <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="-mt-6 space-y-16">
                  {pricing.sections.map((section) => (
                    <div key={section.name}>
                      <h3 className="text-sm/6 font-semibold text-gray-900">{section.name}</h3>
                      <div className="relative -mx-8 mt-10">
                        {/* Fake card backgrounds */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                        >
                          <div className="size-full rounded-lg bg-white shadow-xs" />
                          <div className="size-full rounded-lg bg-white shadow-xs" />
                          <div className="size-full rounded-lg bg-white shadow-xs" />
                        </div>

                        <table className="relative w-full border-separate border-spacing-x-8">
                          <thead>
                            <tr className="text-left">
                              <th scope="col">
                                <span className="sr-only">Feature</span>
                              </th>
                              {pricing.tiers.map((tier) => (
                                <th key={tier.id} scope="col">
                                  <span className="sr-only">{tier.name} tier</span>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.features.map((feature, featureIdx) => (
                              <tr key={feature.name}>
                                <th
                                  scope="row"
                                  className="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900"
                                >
                                  {feature.name}
                                  {featureIdx !== section.features.length - 1 ? (
                                    <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                                  ) : null}
                                </th>
                                {pricing.tiers.map((tier) => (
                                  <td key={tier.id} className="relative w-1/4 px-4 py-0 text-center">
                                    <span className="relative size-full py-3">
                                      {typeof feature.tiers[tier.name as keyof typeof feature.tiers] === 'string' ? (
                                        <span
                                          className={classNames(
                                            tier.featured ? 'font-semibold text-pampas-600' : 'text-gray-900',
                                            'text-sm/6',
                                          )}
                                        >
                                          {feature.tiers[tier.name as keyof typeof feature.tiers]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name as keyof typeof feature.tiers] === true ? (
                                            <CheckIcon aria-hidden="true" className="mx-auto size-5 text-pampas-600" />
                                          ) : (
                                            <XMarkIconMini
                                              aria-hidden="true"
                                              className="mx-auto size-5 text-gray-400"
                                            />
                                          )}

                                          <span className="sr-only">
                                            {feature.tiers[tier.name as keyof typeof feature.tiers] === true ? 'Yes' : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Fake card borders */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                        >
                          {pricing.tiers.map((tier) => (
                            <div
                              key={tier.id}
                              className={classNames(
                                tier.featured ? 'ring-2 ring-pampas-600' : 'ring-1 ring-gray-900/10',
                                'rounded-lg',
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Perguntas frequentes
          </h2>
          <dl className="mt-20 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}
