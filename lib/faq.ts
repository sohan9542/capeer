export type FaqItem = {
  id: number;
  question: string;
  answer: string;
  links: string[];
};

export const FAQ_CRYPTO_LINKS = [
  "Buy BTC",
  "Buy USDT",
  "Buy ETH",
  "Buy DOT",
  "Buy SOL",
  "Buy Doge",
  "Buy XRP",
] as const;

const FAQ_ANSWER =
  "Easily buy Bitcoin within minutes with GBP, EUR, USD or your local currency. CaPeerBara supports various popular payment methods, including Visa, Mastercard, and\u00a0ApplePay credit cards. To get started, check out our latest guide on how to buy Bitcoin on CaPeerBara. Want to buy, sell, or hold other coins that are gaining traction in\u00a0the crypto ecosystem? Check out the following free resources to kick-start your journey today:";

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "What products does CaPeerBara provide?",
    answer: FAQ_ANSWER,
    links: [...FAQ_CRYPTO_LINKS],
  },
  {
    id: 2,
    question: "How do I buy Bitcoin on CaPeerBara?",
    answer: FAQ_ANSWER,
    links: [...FAQ_CRYPTO_LINKS],
  },
  {
    id: 3,
    question: "Where is CaPeerBara based?",
    answer: FAQ_ANSWER,
    links: [...FAQ_CRYPTO_LINKS],
  },
  {
    id: 4,
    question: "What products does CaPeerBara provide?",
    answer: FAQ_ANSWER,
    links: [...FAQ_CRYPTO_LINKS],
  },
  {
    id: 5,
    question: "How do I buy Bitcoin on CaPeerBara?",
    answer: FAQ_ANSWER,
    links: [...FAQ_CRYPTO_LINKS],
  },
];

/** Toggle an accordion index: clicking the open item closes it; otherwise opens the target. */
export function toggleFaqIndex(
  currentActive: number,
  targetId: number,
): number {
  return currentActive === targetId ? 0 : targetId;
}
