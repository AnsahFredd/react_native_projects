import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

/**
 * DecorativeCircles
 * Optimized to be soft, translucent, and clearly three distinct layers.
 */
export const DecorativeCircles = () => {
  const size = width * 0.6; // Slightly larger for that "sweep" effect

  return (
    <View style={styles.container} pointerEvents="none">
      {/* 1. Left Light Circle (The aura) */}
      <View
        style={[
          styles.circle,
          styles.light,
          {
            width: size,
            height: size,
            top: -size * 0.1,
            left: -size * 0.5,
          },
        ]}
      />

      {/* 2. Top Light Circle (The aura) */}
      <View
        style={[
          styles.circle,
          styles.light,
          {
            width: size,
            height: size,
            top: -size * 0.5,
            left: -size * 0.1,
          },
        ]}
      />

      {/* 3. Deep Middle Circle (The anchor) */}
      <View
        style={[
          styles.circle,
          styles.deep,
          {
            width: size * 0.7,
            height: size * 0.7,
            top: -size * 0.05,
            left: -size * 0.05,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: 0,
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
  },
  deep: {
    backgroundColor: "#7FE3D8",
    opacity: 0.35, // Very soft
  },
  light: {
    backgroundColor: "#BAEBE9",
    opacity: 0.2,
  },
});
