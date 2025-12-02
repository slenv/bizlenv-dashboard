import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  FileText,
  CreditCard,
  Menu,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShoppingBag,
  Archive,
  Receipt
} from 'lucide-react'

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'pos', label: 'Punto de Venta', icon: Receipt, path: '/pos' },
    {
      id: 'ventas',
      label: 'Ventas',
      icon: ShoppingCart,
      badge: 12,
      submenu: [
        { id: 'ventas-nuevas', label: 'Nueva Venta', icon: ShoppingBag, path: '/ventas/nueva' },
        { id: 'ventas-lista', label: 'Lista de Ventas', icon: FileText, path: '/ventas' },
        { id: 'ventas-reportes', label: 'Reportes', icon: TrendingUp, path: '/ventas/reportes' },
      ]
    },
    {
      id: 'productos',
      label: 'Productos',
      icon: Package,
      submenu: [
        { id: 'productos-lista', label: 'Todos los Productos', icon: Archive, path: '/productos' },
        { id: 'productos-nuevo', label: 'Nuevo Producto', icon: Package, path: '/productos/nuevo' },
        { id: 'productos-categorias', label: 'Categorías', icon: LayoutDashboard, path: '/productos/categorias' },
      ]
    },
    { id: 'clientes', label: 'Clientes', icon: Users, path: '/clientes' },
    { id: 'reportes', label: 'Reportes', icon: BarChart3, path: '/reportes' },
    { id: 'facturas', label: 'Facturas', icon: FileText, path: '/facturas' },
    { id: 'pagos', label: 'Pagos', icon: CreditCard, path: '/pagos' },
    { id: 'configuracion', label: 'Configuración', icon: Settings, path: '/configuracion' },
  ]

  // Determine active item based on current route
  const getActiveItemFromPath = (path) => {
    if (path === '/') return 'dashboard'

    // Check submenu items first
    for (const item of navItems) {
      if (item.submenu) {
        const submenuItem = item.submenu.find(sub => sub.path === path)
        if (submenuItem) {
          return submenuItem.id
        }
      }
    }

    // Check main items
    const mainItem = navItems.find(item => item.path === path)
    return mainItem ? mainItem.id : 'dashboard'
  }

  const activeItem = getActiveItemFromPath(location.pathname)

  // Restore submenu state from localStorage on mount
  useEffect(() => {
    const savedSubmenu = localStorage.getItem('activeSubmenu')
    if (savedSubmenu && savedSubmenu !== 'null') {
      setActiveSubmenu(savedSubmenu)
    }
  }, [])

  const handleItemClick = (item) => {
    if (item.submenu) {
      // Si tiene submenú, hacer swap al submenú
      setActiveSubmenu(item.id)
      localStorage.setItem('activeSubmenu', item.id)
    } else {
      // Si no tiene submenú, navegar
      navigate(item.path)
      setActiveSubmenu(null)
      localStorage.setItem('activeSubmenu', null)
    }
  }

  const handleBackClick = () => {
    setActiveSubmenu(null)
    localStorage.setItem('activeSubmenu', null)
  }

  const handleSubmenuItemClick = (submenuItem) => {
    navigate(submenuItem.path)
  }

  // Determinar qué items mostrar
  const currentItems = activeSubmenu
    ? navItems.find(item => item.id === activeSubmenu)?.submenu || []
    : navItems

  const showingSubmenu = activeSubmenu !== null
  const parentItem = showingSubmenu ? navItems.find(item => item.id === activeSubmenu) : null

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} `}>
      {/* Sidebar Header */}
      <div className="sidebar-header justify-center">
        <div className="logo">
          <img
            src="/header_logo.png"
            alt="Bizlenv"
            style={{ height: '28px' }}
          />
          {!isCollapsed && <span>Bizlenv</span>}
        </div>
        {!isCollapsed && (
          <button
            className="btn btn-ghost btn-icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label="Colapsar sidebar"
            style={{ marginLeft: 'auto' }}
          >
            <ChevronLeft size={20} />
          </button>
        )}
      </div>

      {/* Collapse button when collapsed - centered */}
      {isCollapsed && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 'var(--spacing-sm) 0',
          borderBottom: '1px solid var(--color-border-light)'
        }}>
          <button
            className="btn btn-ghost btn-icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label="Expandir sidebar"
          >
            <Menu size={20} />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="sidebar-nav">
        {/* Back button cuando estamos en submenú */}
        {showingSubmenu && !isCollapsed && (
          <button
            className="nav-item"
            onClick={handleBackClick}
            style={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-sm)'
            }}
          >
            <span className="nav-item-icon">
              <ChevronLeft size={20} />
            </span>
            <span className="nav-item-label">
              {parentItem?.label}
            </span>
          </button>
        )}

        {/* Items actuales (menú principal o submenú) */}
        <div
          key={showingSubmenu ? 'submenu' : 'main'}
          style={{
            animation: 'slideIn 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {currentItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            const hasSubmenu = !showingSubmenu && item.submenu

            return (
              <a
                key={item.id}
                href={item.path || `#${item.id} `}
                className={`nav-item ${isActive ? 'active' : ''}`}
                title={item.label}
                onClick={(e) => {
                  e.preventDefault()
                  if (showingSubmenu) {
                    handleSubmenuItemClick(item)
                  } else {
                    handleItemClick(item)
                  }
                }}
              >
                <span className="nav-item-icon">
                  <Icon size={20} />
                </span>
                <span className="nav-item-label">{item.label}</span>
                {item.badge && !isCollapsed && (
                  <span className="nav-item-badge">{item.badge}</span>
                )}
                {hasSubmenu && !isCollapsed && (
                  <span className="nav-item-icon" style={{ marginLeft: 'auto' }}>
                    <ChevronRight size={16} />
                  </span>
                )}
              </a>
            )
          })}
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <div
          className="nav-item"
          style={{
            cursor: 'default',
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          }}
        >
          <div className="avatar" style={{
            flexShrink: 0,
            width: '32px',
            height: '32px'
          }}>
            LP
          </div>
          {!isCollapsed && (
            <div className="nav-item-label">
              <div style={{ fontWeight: 600, fontSize: '14px' }}>Lino Palomino</div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                Admin
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animación CSS para el swap */}
      <style>{`
@keyframes slideIn {
          from {
    opacity: 0;
    transform: translateX(-10px);
  }
          to {
    opacity: 1;
    transform: translateX(0);
  }
}
`}</style>
    </aside>
  )
}