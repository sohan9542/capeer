export type NavLink = {
  href: string;
  label: string;
  accent?: boolean;
};

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { href: "/buy-crypto", label: "Buy Crypto", accent: true },
  { href: "/sell-crypto", label: "Sell Crypto", accent: true },
  { href: "/sell-crypto", label: "About", accent: false },
];

export type FooterLink = {
  href: string;
  label: string;
  badge?: string;
};

export const FOOTER_BUY_LINKS: FooterLink[] = [
  { href: "/buy-bnb", label: "Buy BNB", badge: "New" },
  { href: "/buy-usdt", label: "Buy USDT" },
  { href: "/buy-ada", label: "Buy ADA" },
  { href: "/buy-matic", label: "Buy MATIC" },
];

export const FOOTER_SELL_LINKS: FooterLink[] = [
  { href: "/sell-bnb", label: "Sell BNB", badge: "New" },
  { href: "/sell-usdt", label: "Sell USDT" },
  { href: "/sell-ada", label: "Sell ADA" },
  { href: "/sell-matic", label: "Sell MATIC" },
];

export const SOCIAL_LINKS = [
  { href: "http://", icon: "/linkedin.svg", label: "LinkedIn" },
  { href: "http://", icon: "/twitter.svg", label: "Twitter" },
  { href: "http://", icon: "/instagram.svg", label: "Instagram" },
  { href: "http://", icon: "/discord.svg", label: "Discord" },
  { href: "http://", icon: "/telegram.svg", label: "Telegram" },
] as const;
