export const FONTS = {
  family: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semibold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
  },
  sizes: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
  },
  lineHeight: {
    tight: 1.15, // ← your design uses 115%
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: 0,
    normal: 0.06, // ← your design uses 6%
    wide: 0.1,
  },
} as const;
