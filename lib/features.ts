export type FeatureItem = {
  title: string;
  description: string;
  iconSrc: string;
};

export const PRIVACY_FEATURES: FeatureItem[] = [
  {
    title: "Non-custody solution",
    description: "You control the keys to the funds in\u00a0escrow.",
    iconSrc: "/lock.svg",
  },
  {
    title: "Decentralized",
    description: "You control the keys to the funds in\u00a0escrow.",
    iconSrc: "/lock.svg",
  },
  {
    title: "On chain",
    description: "Security, transparency, and\u00a0immutability.",
    iconSrc: "/lock.svg",
  },
  {
    title: "Anonymous",
    description: "No verification required.",
    iconSrc: "/lock.svg",
  },
  {
    title: "API of banks",
    description: "Presenting conection to API of banks.",
    iconSrc: "/lock.svg",
  },
  {
    title: "On chain",
    description: "Security, transparency, and\u00a0immutability.",
    iconSrc: "/lock.svg",
  },
];

export const PARTNER_LOGO_COUNT = 6;
export const PARTNER_LOGO_SRC = "/sepa.webp";

export const HOW_IT_WORKS_STEPS = [
  "  Connect",
  "  Amount",
  "Send money",
  " Verification",
  "  Claim crypto",
] as const;
