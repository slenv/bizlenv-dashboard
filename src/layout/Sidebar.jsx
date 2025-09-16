import { useState } from "react";
import BarsIcon from "@/components/icons/BarsIcon";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: "🛒️", label: "Productos" },
    { icon: "👥", label: "Clientes" },
    { icon: "💰️", label: "Tesorería" },
    { icon: "📋️", label: "Almacen" },
    { icon: "⚙️", label: "Configuración" },

  ];

  return (
    <>
      {/* overlay for mobile */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* sidebar */}
      <div
        className={`fixed left-0 top-14 bottom-0 bg-zinc-800 border-r border-zinc-700 z-40 transition-all duration-300 flex flex-col ${isExpanded ? 'w-60' : 'w-16'
          }`}
      >
        {/* menu items */}
        <div className="flex flex-col flex-1 py-3 gap-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-4 mx-3 px-3 py-3 text-gray-300 hover:bg-zinc-700 hover:text-white transition-colors rounded-md group ${!isExpanded ? 'justify-center' : ''}`}
              title={!isExpanded ? item.label : undefined}
            >
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 flex items-center justify-center text-lg">
                  {item.icon}
                </div>
              </div>
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* collapse/expand button */}
        <div className="p-3 border-t border-zinc-700">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full flex items-center gap-4 px-3 py-3 text-gray-300 hover:bg-zinc-700 hover:text-white transition-colors rounded-md border border-zinc-600 ${!isExpanded ? 'justify-center' : ''
              }`}
          >
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <BarsIcon />
            </div>
            {isExpanded && (
              <span className="text-sm font-medium">
                Colapsar
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  )
}