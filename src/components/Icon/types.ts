export type IconType =
  | "book"
  | "cancel"
  | "calendar"
  | "caret-left"
  | "caret-down"
  | "caret-right"
  | "caret-up"
  | "chevron-left"
  | "chevron-up"
  | "chevron-right"
  | "chevron-down"
  | "charts"
  | "check"
  | "edit"
  | "document"
  | "documents"
  | "folder"
  | "filter"
  | "menu"
  | "notification"
  | "options"
  | "people"
  | "settings"
  | "plus"

export const icons: Record<IconType, string> = {
  book: "ion:book",
  calendar: "ion:calendar",
  cancel: "ion:ban",
  "caret-down": "ion:caret-down",
  "caret-left": "ion:caret-back",
  "caret-right": "ion:caret-forward",
  "caret-up": "ion:caret-up",
  charts: "ion:stats-chart",
  check: "ion:checkmark",
  "chevron-left": "ion:chevron-back",
  "chevron-up": "ion:chevron-up",
  "chevron-right": "ion:chevron-forward",
  "chevron-down": "ion:chevron-down",
  edit: "ion:create",
  document: "ion:document",
  documents: "ion:documents",
  folder: "ion:folder",
  filter: "ion:funnel",
  menu: "ion:menu",
  notification: "ion:notifications",
  options: "ion:options",
  people: "ion:people",
  settings: "ion:settings",
  plus: "ion:add"
}

export const iconVariants = ["default", "outline", "sharp"] as const
export type IconVariant = typeof iconVariants[number]

export const iconSizes = ["small", "medium", "large"] as const
export type IconSize = typeof iconSizes[number]
