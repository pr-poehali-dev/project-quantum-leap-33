import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <NLPLogo />
        <span className="text-lg font-semibold text-white">
          NextLevelPay<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Продукты
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Решения <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Интеграции
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Подключиться
      </Button>
    </header>
  )
}

function NLPLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="11" height="11" rx="3" fill="#8B5CF6" />
      <rect x="15" y="2" width="11" height="11" rx="3" fill="#8B5CF6" opacity="0.5" />
      <rect x="2" y="15" width="11" height="11" rx="3" fill="#8B5CF6" opacity="0.5" />
      <rect x="15" y="15" width="11" height="11" rx="3" fill="#8B5CF6" opacity="0.25" />
    </svg>
  )
}