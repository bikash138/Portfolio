"use client";

import React, { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const deviconClass =
    iconConfig.deviconClassLight &&
    iconConfig.deviconClassDark &&
    mounted
      ? resolvedTheme === "dark"
        ? iconConfig.deviconClassDark
        : iconConfig.deviconClassLight
      : iconConfig.deviconClass;

  if (!deviconClass) return null;

  return <i className={`${deviconClass} ${className}`} />;
}
