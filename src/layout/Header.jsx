import { useState, useRef, useEffect } from 'react'
import { Bell, ChevronDown, LogOut, Settings, User, Building2, Menu } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header({ isSidebarCollapsed, setIsSidebarCollapsed }) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showBranchMenu, setShowBranchMenu] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState('Sucursal Principal')

  const userMenuRef = useRef(null)
  const branchMenuRef = useRef(null)

  const branches = [
    'Sucursal Principal',
    'Sucursal Norte',
    'Sucursal Sur',
    'Sucursal Centro'
  ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
      if (branchMenuRef.current && !branchMenuRef.current.contains(event.target)) {
        setShowBranchMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="header">
      {/* Mobile Menu Button */}
      <button
        className="btn btn-ghost btn-icon md:hidden"
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        aria-label="Toggle menu"
      >
        <Menu size={20} />
      </button>

      {/* Left Section - Branch Selector */}
      <div className="header-left">
        {/* Branch Selector Dropdown */}
        <div style={{ position: 'relative' }} ref={branchMenuRef}>
          <button
            className="btn btn-ghost"
            onClick={() => setShowBranchMenu(!showBranchMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none'
            }}
          >
            <Building2 size={20} />
            {selectedBranch}
            <ChevronDown size={16} />
          </button>

          {/* Branch Dropdown Menu */}
          {showBranchMenu && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              minWidth: '220px',
              zIndex: 'var(--z-dropdown)',
              border: '1px solid var(--color-border-light)',
              overflow: 'hidden'
            }}>
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => {
                    setSelectedBranch(branch)
                    setShowBranchMenu(false)
                  }}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: 'none',
                    background: branch === selectedBranch ? 'var(--color-bg-hover)' : 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: branch === selectedBranch ? 600 : 400,
                    color: branch === selectedBranch ? 'var(--color-primary)' : 'var(--color-text-primary)',
                    transition: 'background-color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-bg-hover)'}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = branch === selectedBranch ? 'var(--color-bg-hover)' : 'transparent'
                  }}
                >
                  {branch}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center Section - Empty (removed search) */}
      <div className="header-center" />

      {/* Right Section - Notifications and User */}
      <div className="header-right">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <button className="btn btn-ghost btn-icon" aria-label="Notificaciones">
          <Bell size={20} />
        </button>

        {/* User Dropdown */}
        <div style={{ position: 'relative' }} ref={userMenuRef}>
          <button
            className="btn btn-ghost"
            onClick={() => setShowUserMenu(!showUserMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              padding: 'var(--spacing-xs)',
              border: 'none'
            }}
          >
            <div className="avatar">JD</div>
            <ChevronDown size={16} />
          </button>

          {/* User Dropdown Menu */}
          {showUserMenu && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              right: 0,
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              minWidth: '200px',
              zIndex: 'var(--z-dropdown)',
              border: '1px solid var(--color-border-light)',
              overflow: 'hidden'
            }}>
              {/* User Info */}
              <div style={{
                padding: 'var(--spacing-md)',
                borderBottom: '1px solid var(--color-border-light)'
              }}>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Juan Pérez</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                  admin@bizlenv.com
                </div>
              </div>

              {/* Menu Items */}
              <button
                onClick={() => setShowUserMenu(false)}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-bg-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <User size={16} />
                Mi Perfil
              </button>

              <button
                onClick={() => setShowUserMenu(false)}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-bg-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <Settings size={16} />
                Configuración
              </button>

              <div style={{ height: '1px', backgroundColor: 'var(--color-border-light)', margin: 'var(--spacing-xs) 0' }} />

              <button
                onClick={() => setShowUserMenu(false)}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  color: 'var(--color-danger)',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-bg-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <LogOut size={16} />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
