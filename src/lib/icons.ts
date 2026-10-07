export const D = {
  ne: "M6 18L18 6M8 6h10v10",
  r: "M3 12h18M14 5l7 7-7 7",
  l: "M21 12H3M10 5l-7 7 7 7",
  dn: "M12 3v18M5 14l7 7 7-7",
  up: "M12 21V3M5 10l7-7 7 7",
  x: "M5 5l14 14M19 5L5 19",
  plus: "M12 4v16M4 12h16",
} as const;

export type IconPath = (typeof D)[keyof typeof D];
