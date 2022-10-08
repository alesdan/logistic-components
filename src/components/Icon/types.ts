export type IconType = "check" | "cancel"

export const icons: Record<IconType, string> = {
  check: "ion:checkmark",
  cancel: "ion:ban"
}

export const iconVariants = ["default", "outline", "sharp"] as const
export type IconVariant = typeof iconVariants[number]

export const iconSizes = ["small", "medium", "large"] as const
export type IconSize = typeof iconSizes[number]
