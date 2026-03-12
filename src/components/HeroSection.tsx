import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">НОВОЕ ПОКОЛЕНИЕ</span>
        <span className="text-gray-300">Интернет-эквайринг для любого бизнеса</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Платёжный агрегатор нового поколения
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">Принимайте и отправляйте деньги онлайн. Антифрод мирового уровня, гибкие интеграции и выделенный менеджер 24/7 — всё для роста вашего бизнеса.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-emerald-600 px-6 hover:bg-emerald-700 text-white">
          Начать приём платежей <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
          <Play className="mr-2 h-4 w-4 fill-emerald-500 text-emerald-500" /> Смотреть обзор
        </Button>
      </div>
    </section>
  )
}