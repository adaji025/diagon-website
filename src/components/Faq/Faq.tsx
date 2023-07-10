"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "../Svg/Svg";
// import { MinusSmallIcon, PlusSmallIcon } from "";

const faqs = [
  {
    question: "What is CLS?",
    answer: `CLS is a leading crypto e-commerce store that allows users to Shop,
    Pay with Crypto and get rewarded for shopping by purchasing digital gift
    cards and phone refills with Bitcoin or crypto. We also offer bill payment in
    specific countries and plan to expand this service to more countries in the 
    future.`,
  },

  {
    question: "Which cryptocurrencies do you support?",
    answer:
      "With Points you can purchase gift cards using a variety of cryptocurrencies including Bitcoin, Lightning, Ethereum, USDC, USDT, Binance Pay, Litecoin, Dogecoin or Dash.",
  },
  {
    question: "Which wallets or crypto exchanges do you support?",
    answer:
      "With Points you can purchase gift cards using a variety of cryptocurrencies including Bitcoin, Lightning, Ethereum, USDC, USDT, Binance Pay, Litecoin, Dogecoin or Dash.",
  },
  {
    question: "How do I convert CLS Token to Cash?",
    answer:
      "With Points you can purchase gift cards using a variety of cryptocurrencies including Bitcoin, Lightning, Ethereum, USDC, USDT, Binance Pay, Litecoin, Dogecoin or Dash.",
  },
  {
    question: "Does POINTS have a rewards program?",
    answer:
      "With Points you can purchase gift cards using a variety of cryptocurrencies including Bitcoin, Lightning, Ethereum, USDC, USDT, Binance Pay, Litecoin, Dogecoin or Dash.",
  },
];

export default function Faq() {
  return (
    <div className="gap-6">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center ">
                    {open ? <MinusSmallIcon /> : <PlusSmallIcon />}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base text-[#484848]">{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
