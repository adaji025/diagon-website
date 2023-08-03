"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "../Svg/Svg";
// import { MinusSmallIcon, PlusSmallIcon } from "";

const faqs = [
  {
    question: "How do I get started on DIAGON?",
    answer: `Download CASUAL on your Android or iOS device, play casual games
    to gather points, and shop with points gathered from your play.
    `,
  },

  {
    question: "What is CASUAL?",
    answer: `CASUAL by Diagon is a social gaming application where Gamers play
     online games and gather points for mobile top ups at discounted
     prices, online subscriptions and much more.`,
  },
  {
    question: " What is CSL",
    answer: `CSL is the in-App currency in the CASUAL App. It's introduced to
    provide a virtual medium of exchange in CASUAL.`
  },
  {
    question: "How do I convert CLS Token to Cash?",
    answer: `Play games to gather a minimum of 10,000 points and proceed to your
    in-App CSL wallet to convert points.`
  },
  {
    question: "Can I buy CSL?",
    answer: `Yes. You can buy CSL with real money, and use it to unlock premium
    features, purchase giftcards and international top ups at discounted
    prices and much more`
  },
  {
    question: "Can I use regular currency for payments on CASUAL?",
    answer: `Yes. We recognize the need for flexibility. You can choose to use
    traditional currency in your Naira Wallet based on your preference.
    `
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
