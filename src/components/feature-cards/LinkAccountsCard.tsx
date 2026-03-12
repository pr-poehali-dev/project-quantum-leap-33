import { ShieldCheck, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const merchants = [
  { name: "ООО «Технологии»", info: "tech@company.ru", code: "MID-8821", image: "/professional-man-portrait.png" },
  { name: "ИП Смирнова Е.В.", info: "+7 (495) 234-56-78", code: "MID-8843", image: "/professional-woman-portrait.png" },
  { name: "АО «Ритейл Про»", info: "pay@retailpro.ru", code: "MID-8864", initials: "РП", color: "bg-teal-600" },
  { name: "ООО «МедиаГрупп»", info: "+7 (812) 765-43-21", code: "MID-8871", initials: "МГ", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <ShieldCheck className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Антифрод-защита мирового уровня</h3>
      <p className="mb-4 text-sm text-gray-400">Система защиты на основе лучших мировых практик — блокирует мошеннические транзакции в реальном времени</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {merchants.map((merchant, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {merchant.image ? (
                  <AvatarImage src={merchant.image || "/placeholder.svg"} alt={merchant.name} />
                ) : null}
                <AvatarFallback className={`${merchant.color || "bg-gray-600"} text-white text-xs`}>
                  {merchant.initials ||
                    merchant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{merchant.name}</p>
                <p className="text-xs text-gray-500">{merchant.info}</p>
              </div>
            </div>
            <span className="text-xs text-emerald-500/70">{merchant.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Добавить мерчанта
        </Button>
      </div>
    </div>
  )
}