import { describe, expect, it } from "vitest";
import { FAQ_ITEMS, toggleFaqIndex } from "./faq";

describe("toggleFaqIndex", () => {
  it("opens a closed item", () => {
    expect(toggleFaqIndex(0, 2)).toBe(2);
  });

  it("closes the currently open item", () => {
    expect(toggleFaqIndex(2, 2)).toBe(0);
  });

  it("switches from one open item to another", () => {
    expect(toggleFaqIndex(1, 3)).toBe(3);
  });
});

describe("FAQ_ITEMS", () => {
  it("contains five accordion entries with unique ids", () => {
    expect(FAQ_ITEMS).toHaveLength(5);
    const ids = FAQ_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps non-empty questions and answers", () => {
    for (const item of FAQ_ITEMS) {
      expect(item.question.trim().length).toBeGreaterThan(0);
      expect(item.answer.trim().length).toBeGreaterThan(0);
      expect(item.links.length).toBeGreaterThan(0);
    }
  });
});
