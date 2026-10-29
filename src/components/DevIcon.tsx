"use client";

import React from "react";
import { useMounted } from "@/lib/use-mounted";
import { useTheme } from "next-themes";
import type { TechIcon } from "@/data/tech-icons";

export function DevIcon({
  iconConfig,
  className = "",
}: {
  iconConfig: TechIcon;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const deviconClass =
    iconConfig.deviconClassLight && iconConfig.deviconClassDark && mounted
      ? resolvedTheme === "dark"
        ? iconConfig.deviconClassDark
        : iconConfig.deviconClassLight
      : iconConfig.deviconClass;

  if (!deviconClass) return null;

  return <i className={`${deviconClass} ${className}`} />;
}
