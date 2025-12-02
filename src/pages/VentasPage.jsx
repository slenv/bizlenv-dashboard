import { ShoppingCart, Plus, TrendingUp, DollarSign } from 'lucide-react'

export default function VentasPage() {
  const ventas = [
    { id: 1, numero: 'V-001', cliente: 'María González', total: 'S/899', fecha: '2025-12-02', estado: 'Completada' },
    { id: 2, numero: 'V-002', cliente: 'Carlos Ruiz', total: 'S/25', fecha: '2025-12-02', estado: 'Completada' },
    { id: 3, numero: 'V-003', cliente: 'Ana Martínez', total: 'S/120', fecha: '2025-12-01', estado: 'Pendiente' },
    { id: 4, numero: 'V-004', cliente: 'Pedro Sánchez', total: 'S/350', fecha: '2025-12-01', estado: 'Completada' },
    { id: 5, numero: 'V-005', cliente: 'Laura Torres', total: 'S/75', fecha: '2025-11-30', estado: 'Cancelada' },
  ]

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
            Ventas
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
            Historial de ventas realizadas
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Nueva Venta
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingCart size={24} color="var(--color-primary)" />
            </div>
            <div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Total Ventas</p>
              <h3 style={{ fontSize: '24px', fontWeight: 700 }}>156</h3>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: '#e6f7f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DollarSign size={24} color="var(--color-success)" />
            </div>
            <div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Ingresos</p>
              <h3 style={{ fontSize: '24px', fontWeight: 700 }}>S/12,345</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Lista de Ventas</h2>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Número
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Cliente
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Total
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Fecha
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr
                key={venta.id}
                style={{
                  borderBottom: '1px solid var(--color-border-light)',
                  transition: 'background-color var(--transition-fast)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600, color: 'var(--color-primary)' }}>
                  {venta.numero}
                </td>
                <td style={{ padding: 'var(--spacing-md)' }}>
                  {venta.cliente}
                </td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>
                  {venta.total}
                </td>
                <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                  {venta.fecha}
                </td>
                <td style={{ padding: 'var(--spacing-md)' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: venta.estado === 'Completada' ? 'var(--color-primary-light)' :
                      venta.estado === 'Pendiente' ? '#fff3cd' : '#f8d7da',
                    color: venta.estado === 'Completada' ? 'var(--color-primary)' :
                      venta.estado === 'Pendiente' ? '#856404' : '#721c24'
                  }}>
                    {venta.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
