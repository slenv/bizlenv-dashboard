import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Ventas del Día',
      value: 'S/12,345',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'success'
    },
    {
      title: 'Pedidos',
      value: '156',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'primary'
    },
    {
      title: 'Productos',
      value: '1,234',
      change: '-2.4%',
      trend: 'down',
      icon: Package,
      color: 'warning'
    },
    {
      title: 'Clientes',
      value: '892',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'info'
    }
  ]

  const recentSales = [
    { id: 1, cliente: 'María González', producto: 'Laptop HP', monto: 'S/899', fecha: 'Hace 5 min' },
    { id: 2, cliente: 'Carlos Ruiz', producto: 'Mouse Logitech', monto: 'S/25', fecha: 'Hace 12 min' },
    { id: 3, cliente: 'Ana Martínez', producto: 'Teclado Mecánico', monto: 'S/120', fecha: 'Hace 25 min' },
    { id: 4, cliente: 'Pedro Sánchez', producto: 'Monitor LG 27"', monto: 'S/350', fecha: 'Hace 1 hora' },
    { id: 5, cliente: 'Laura Torres', producto: 'Webcam HD', monto: 'S/75', fecha: 'Hace 2 horas' },
  ]

  const iconColors = {
    success: 'text-success',
    primary: 'text-primary',
    warning: 'text-warning',
    info: 'text-info'
  }

  const iconBgColors = {
    success: 'bg-green-50 dark:bg-green-900/20',
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20',
    info: 'bg-blue-50 dark:bg-blue-900/20'
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Page Header */}
      <div className="mb-xl">
        <h1 className="text-[28px] font-bold mb-xs">Dashboard</h1>
        <p className="text-text-secondary text-sm">
          Resumen de tu negocio en tiempo real
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
        {stats.map((stat) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown
          const trendColor = stat.trend === 'up' ? 'text-success' : 'text-danger'

          return (
            <div key={stat.title} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-text-secondary text-[13px] mb-xs">
                    {stat.title}
                  </p>
                  <h3 className="text-[28px] font-bold mb-xs">
                    {stat.value}
                  </h3>
                  <div className="flex items-center gap-xs">
                    <TrendIcon size={16} className={trendColor} />
                    <span className={`text-[13px] font-semibold ${trendColor}`}>
                      {stat.change}
                    </span>
                    <span className="text-[13px] text-text-tertiary">
                      vs mes anterior
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg ${iconBgColors[stat.color]} flex items-center justify-center`}>
                  <Icon size={24} className={iconColors[stat.color]} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Sales */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Ventas Recientes</h2>
          <p className="card-subtitle">Últimas transacciones realizadas</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-light">
                <th className="px-md py-sm text-left text-[13px] font-semibold text-text-secondary">
                  Cliente
                </th>
                <th className="px-md py-sm text-left text-[13px] font-semibold text-text-secondary">
                  Producto
                </th>
                <th className="px-md py-sm text-left text-[13px] font-semibold text-text-secondary">
                  Monto
                </th>
                <th className="px-md py-sm text-left text-[13px] font-semibold text-text-secondary">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale) => (
                <tr
                  key={sale.id}
                  className="border-b border-border-light hover:bg-bg-hover transition-colors cursor-pointer"
                >
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="avatar">
                        {sale.cliente.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium">{sale.cliente}</span>
                    </div>
                  </td>
                  <td className="px-md py-md text-text-secondary">
                    {sale.producto}
                  </td>
                  <td className="px-md py-md font-semibold">
                    {sale.monto}
                  </td>
                  <td className="px-md py-md text-text-tertiary text-[13px]">
                    {sale.fecha}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-md pt-md border-t border-border-light text-center">
          <button className="btn btn-ghost">
            Ver todas las ventas
          </button>
        </div>
      </div>
    </div>
  )
}
