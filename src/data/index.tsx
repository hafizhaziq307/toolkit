import {
  Bars3BottomLeftIcon,
  CircleStackIcon,
  PaintBrushIcon,
  QrCodeIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

export const tools = [
  {
    title: "text count",
    tag: "text",
    link: "text_tool_word_count",
    description: "Count words and characters with or without space in text",
    icon: <Bars3BottomLeftIcon className="h-6 w-6 text-amber-500" />,
  },
  {
    title: "remove newline",
    tag: "text",
    link: "text_tool_remove_newline",
    description: "Remove all newlines in text",

    icon: <Bars3BottomLeftIcon className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "text transforms",
    tag: "text",
    link: "text_tool_word_transforms",
    description: "Uppercase, lowercase and capitalize the text",

    icon: <Bars3BottomLeftIcon className="h-6 w-6 text-teal-500" />,
  },
  //   {
  //     title: "Insert Generator",
  //     tag: "sql",
  //     link: "sql_insert_generator",
  //   description: "",

  //     icon: <CircleStackIcon className="h-6 w-6 text-amber-500" />,
  //   },
  {
    title: "QR Code Scanner",
    tag: "QR Code",
    link: "qrcode_scanner",
    description: "Scan QR code using image",

    icon: <QrCodeIcon className="h-6 w-6 text-sky-500" />,
  },
  {
    title: "Tailwind Color Similarity",
    tag: "Color",
    link: "tailwind_color_similarity",
    description: "Get similar color in Tailwind CSS using hexcode",

    icon: <SwatchIcon className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Average Color Extractor",
    tag: "Color",
    link: "average_color_extractor",
    description: "Get average color using image",

    icon: <PaintBrushIcon className="h-6 w-6 text-indigo-500" />,
  },
];

export const tailwind_colors = [
  // slate
  { title: "slate-50", hexcode: "#F8FAFC" },
  { title: "slate-100", hexcode: "#F1F5F9" },
  { title: "slate-200", hexcode: "#E2E8F0" },
  { title: "slate-300", hexcode: "#CBD5E1" },
  { title: "slate-400", hexcode: "#94A3B8" },
  { title: "slate-500", hexcode: "#64748B" },
  { title: "slate-600", hexcode: "#475569" },
  { title: "slate-700", hexcode: "#334155" },
  { title: "slate-800", hexcode: "#1E293B" },
  { title: "slate-900", hexcode: "#0F172A" },

  // gray
  { title: "gray-50", hexcode: "#F9FAFB" },
  { title: "gray-100", hexcode: "#F3F4F6" },
  { title: "gray-200", hexcode: "#E5E7EB" },
  { title: "gray-300", hexcode: "#D1D5DB" },
  { title: "gray-400", hexcode: "#9CA3AF" },
  { title: "gray-500", hexcode: "#6B7280" },
  { title: "gray-600", hexcode: "#4B5563" },
  { title: "gray-700", hexcode: "#374151" },
  { title: "gray-800", hexcode: "#1F2937" },
  { title: "gray-900", hexcode: "#111827" },

  // zinc
  { title: "zinc-50", hexcode: "#FAFAFA" },
  { title: "zinc-100", hexcode: "#F4F4F5" },
  { title: "zinc-200", hexcode: "#E4E4E7" },
  { title: "zinc-300", hexcode: "#D4D4D8" },
  { title: "zinc-400", hexcode: "#A1A1AA" },
  { title: "zinc-500", hexcode: "#71717A" },
  { title: "zinc-600", hexcode: "#52525B" },
  { title: "zinc-700", hexcode: "#3F3F46" },
  { title: "zinc-800", hexcode: "#27272A" },
  { title: "zinc-900", hexcode: "#18181B" },

  // Neutral
  { title: "neutral-50", hexcode: "#FAFAFA" },
  { title: "neutral-100", hexcode: "#F5F5F5" },
  { title: "neutral-200", hexcode: "#E5E5E5" },
  { title: "neutral-300", hexcode: "#D4D4D4" },
  { title: "neutral-400", hexcode: "#A3A3A3" },
  { title: "neutral-500", hexcode: "#737373" },
  { title: "neutral-600", hexcode: "#525252" },
  { title: "neutral-700", hexcode: "#404040" },
  { title: "neutral-800", hexcode: "#262626" },
  { title: "neutral-900", hexcode: "#171717" },

  // Stone
  { title: "stone-50", hexcode: "#FAFAF9" },
  { title: "stone-100", hexcode: "#F5F5F4" },
  { title: "stone-200", hexcode: "#E7E5E4" },
  { title: "stone-300", hexcode: "#D6D3D1" },
  { title: "stone-400", hexcode: "#A8A29E" },
  { title: "stone-500", hexcode: "#78716C" },
  { title: "stone-600", hexcode: "#57534E" },
  { title: "stone-700", hexcode: "#44403C" },
  { title: "stone-800", hexcode: "#292524" },
  { title: "stone-900", hexcode: "#1C1917" },

  // Red
  { title: "red-50", hexcode: "#FEF2F2" },
  { title: "red-100", hexcode: "#FEE2E2" },
  { title: "red-200", hexcode: "#FECACA" },
  { title: "red-300", hexcode: "#FCA5A5" },
  { title: "red-400", hexcode: "#F87171" },
  { title: "red-500", hexcode: "#EF4444" },
  { title: "red-600", hexcode: "#DC2626" },
  { title: "red-700", hexcode: "#B91C1C" },
  { title: "red-800", hexcode: "#991B1B" },
  { title: "red-900", hexcode: "#7F1D1D" },

  // orange
  { title: "orange-50", hexcode: "#FFF7ED" },
  { title: "orange-100", hexcode: "#FFEDD5" },
  { title: "orange-200", hexcode: "#FED7AA" },
  { title: "orange-300", hexcode: "#FDBA74" },
  { title: "orange-400", hexcode: "#FB923C" },
  { title: "orange-500", hexcode: "#F97316" },
  { title: "orange-600", hexcode: "#EA580C" },
  { title: "orange-700", hexcode: "#C2410C" },
  { title: "orange-800", hexcode: "#9A3412" },
  { title: "orange-900", hexcode: "#7C2D12" },

  // Amber
  { title: "amber-50", hexcode: "#FFFBEB" },
  { title: "amber-100", hexcode: "#FEF3C7" },
  { title: "amber-200", hexcode: "#FDE68A" },
  { title: "amber-300", hexcode: "#FCD34D" },
  { title: "amber-400", hexcode: "#FBBF24" },
  { title: "amber-500", hexcode: "#F59E0B" },
  { title: "amber-600", hexcode: "#D97706" },
  { title: "amber-700", hexcode: "#B45309" },
  { title: "amber-800", hexcode: "#92400E" },
  { title: "amber-900", hexcode: "#78350F" },

  // Yellow
  { title: "yellow-50", hexcode: "#FEFCE8" },
  { title: "yellow-100", hexcode: "#FEF9C3" },
  { title: "yellow-200", hexcode: "#FEF08A" },
  { title: "yellow-300", hexcode: "#FDE047" },
  { title: "yellow-400", hexcode: "#FACC15" },
  { title: "yellow-500", hexcode: "#EAB308" },
  { title: "yellow-600", hexcode: "#CA8A04" },
  { title: "yellow-700", hexcode: "#A16207" },
  { title: "yellow-800", hexcode: "#854D0E" },
  { title: "yellow-900", hexcode: "#713F12" },

  // Lime
  { title: "lime-50", hexcode: "#F7FEE7" },
  { title: "lime-100", hexcode: "#ECFCCB" },
  { title: "lime-200", hexcode: "#D9F99D" },
  { title: "lime-300", hexcode: "#BEF264" },
  { title: "lime-400", hexcode: "#A3E635" },
  { title: "lime-500", hexcode: "#84CC16" },
  { title: "lime-600", hexcode: "#65A30D" },
  { title: "lime-700", hexcode: "#4D7C0F" },
  { title: "lime-800", hexcode: "#3F6212" },
  { title: "lime-900", hexcode: "#365314" },

  // Green
  { title: "green-50", hexcode: "#F0FDF4" },
  { title: "green-100", hexcode: "#DCFCE7" },
  { title: "green-200", hexcode: "#BBF7D0" },
  { title: "green-300", hexcode: "#86EFAC" },
  { title: "green-400", hexcode: "#4ADE80" },
  { title: "green-500", hexcode: "#22C55E" },
  { title: "green-600", hexcode: "#16A34A" },
  { title: "green-700", hexcode: "#15803D" },
  { title: "green-800", hexcode: "#166534" },
  { title: "green-900", hexcode: "#34D399" },

  // Teal
  { title: "teal-50", hexcode: "#F0FDFA" },
  { title: "teal-100", hexcode: "#CCFBF1" },
  { title: "teal-200", hexcode: "#99F6E4" },
  { title: "teal-300", hexcode: "#5EEAD4" },
  { title: "teal-400", hexcode: "#2DD4BF" },
  { title: "teal-500", hexcode: "#14B8A6" },
  { title: "teal-600", hexcode: "#0D9488" },
  { title: "teal-700", hexcode: "#0F766E" },
  { title: "teal-800", hexcode: "#115E59" },
  { title: "teal-900", hexcode: "#134E4A" },

  // Cyan
  { title: "cyan-50", hexcode: "#ECFEFF" },
  { title: "cyan-100", hexcode: "#CFFAFE" },
  { title: "cyan-200", hexcode: "#A5F3FC" },
  { title: "cyan-300", hexcode: "#67E8F9" },
  { title: "cyan-400", hexcode: "#22D3EE" },
  { title: "cyan-500", hexcode: "#06B6D4" },
  { title: "cyan-600", hexcode: "#0891B2" },
  { title: "cyan-700", hexcode: "#0E7490" },
  { title: "cyan-800", hexcode: "#155E75" },
  { title: "cyan-900", hexcode: "#164E63" },

  // Sky
  { title: "sky-50", hexcode: "#F0F9FF" },
  { title: "sky-100", hexcode: "#E0F2FE" },
  { title: "sky-200", hexcode: "#BAE6FD" },
  { title: "sky-300", hexcode: "#7DD3FC" },
  { title: "sky-400", hexcode: "#38BDF8" },
  { title: "sky-500", hexcode: "#0EA5E9" },
  { title: "sky-600", hexcode: "#0284C7" },
  { title: "sky-700", hexcode: "#0369A1" },
  { title: "sky-800", hexcode: "#075985" },
  { title: "sky-900", hexcode: "#0C4A6E" },

  // Blue
  { title: "blue-50", hexcode: "#EFF6FF" },
  { title: "blue-100", hexcode: "#DBEAFE" },
  { title: "blue-200", hexcode: "#BFDBFE" },
  { title: "blue-300", hexcode: "#93C5FD" },
  { title: "blue-400", hexcode: "#60A5FA" },
  { title: "blue-500", hexcode: "#3B82F6" },
  { title: "blue-600", hexcode: "#2563EB" },
  { title: "blue-700", hexcode: "#1D4ED8" },
  { title: "blue-800", hexcode: "#1E40AF" },
  { title: "blue-900", hexcode: "#1E3A8A" },

  // Indigo
  { title: "indigo-50", hexcode: "#EEF2FF" },
  { title: "indigo-100", hexcode: "#E0E7FF" },
  { title: "indigo-200", hexcode: "#C7D2FE" },
  { title: "indigo-300", hexcode: "#A5B4FC" },
  { title: "indigo-400", hexcode: "#818CF8" },
  { title: "indigo-500", hexcode: "#6366F1" },
  { title: "indigo-600", hexcode: "#4F46E5" },
  { title: "indigo-700", hexcode: "#4338CA" },
  { title: "indigo-800", hexcode: "#3730A3" },
  { title: "indigo-900", hexcode: "#312E81" },

  // Violet
  { title: "violet-50", hexcode: "#F5F3FF" },
  { title: "violet-100", hexcode: "#EDE9FE" },
  { title: "violet-200", hexcode: "#DDD6FE" },
  { title: "violet-300", hexcode: "#C4B5FD" },
  { title: "violet-400", hexcode: "#A78BFA" },
  { title: "violet-500", hexcode: "#8B5CF6" },
  { title: "violet-600", hexcode: "#7C3AED" },
  { title: "violet-700", hexcode: "#6D28D9" },
  { title: "violet-800", hexcode: "#5B21B6" },
  { title: "violet-900", hexcode: "#4C1D95" },

  // Purple
  { title: "purple-50", hexcode: "#FAF5FF" },
  { title: "purple-100", hexcode: "#F3E8FF" },
  { title: "purple-200", hexcode: "#E9D5FF" },
  { title: "purple-300", hexcode: "#D8B4FE" },
  { title: "purple-400", hexcode: "#C084FC" },
  { title: "purple-500", hexcode: "#A855F7" },
  { title: "purple-600", hexcode: "#9333EA" },
  { title: "purple-700", hexcode: "#7E22CE" },
  { title: "purple-800", hexcode: "#6B21A8" },
  { title: "purple-900", hexcode: "#581C87" },

  // Fuchsia
  { title: "fuchsia-50", hexcode: "#FDF4FF" },
  { title: "fuchsia-100", hexcode: "#FAE8FF" },
  { title: "fuchsia-200", hexcode: "#F5D0FE" },
  { title: "fuchsia-300", hexcode: "#F0ABFC" },
  { title: "fuchsia-400", hexcode: "#E879F9" },
  { title: "fuchsia-500", hexcode: "#D946EF" },
  { title: "fuchsia-600", hexcode: "#C026D3" },
  { title: "fuchsia-700", hexcode: "#A21CAF" },
  { title: "fuchsia-800", hexcode: "#86198F" },
  { title: "fuchsia-900", hexcode: "#701A75" },

  // Pink
  { title: "pink-50", hexcode: "#FDF2F8" },
  { title: "pink-100", hexcode: "#FCE7F3" },
  { title: "pink-200", hexcode: "#FBCFE8" },
  { title: "pink-300", hexcode: "#F9A8D4" },
  { title: "pink-400", hexcode: "#F472B6" },
  { title: "pink-500", hexcode: "#EC4899" },
  { title: "pink-600", hexcode: "#DB2777" },
  { title: "pink-700", hexcode: "#BE185D" },
  { title: "pink-800", hexcode: "#9D174D" },
  { title: "pink-900", hexcode: "#831843" },

  // Rose
  { title: "rose-50", hexcode: "#FFF1F2" },
  { title: "rose-100", hexcode: "#FFE4E6" },
  { title: "rose-200", hexcode: "#FECDD3" },
  { title: "rose-300", hexcode: "#FDA4AF" },
  { title: "rose-400", hexcode: "#FB7185" },
  { title: "rose-500", hexcode: "#F43F5E" },
  { title: "rose-600", hexcode: "#E11D48" },
  { title: "rose-700", hexcode: "#BE123C" },
  { title: "rose-800", hexcode: "#9F1239" },
  { title: "rose-900", hexcode: "#881337" },

  // Basic
  { title: "white", hexcode: "#FFFFFF" },
  { title: "black", hexcode: "#000000" },
];
