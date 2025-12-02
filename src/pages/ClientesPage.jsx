import { Users, Plus, Mail, Phone } from 'lucide-react'

export default function ClientesPage() {
  const clientes = [
    { id: 1, nombre: 'María González', email: 'maria@email.com', telefono: '555-0101', compras: 12 },
    { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@email.com', telefono: '555-0102', compras: 8 },
    { id: 3, nombre: 'Ana Martínez', email: 'ana@email.com', telefono: '555-0103', compras: 15 },
    { id: 4, nombre: 'Pedro Sánchez', email: 'pedro@email.com', telefono: '555-0104', compras: 5 },
    { id: 5, nombre: 'Laura Torres', email: 'laura@email.com', telefono: '555-0105', compras: 20 },
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
            Clientes
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
            Gestiona tu base de clientes
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Nuevo Cliente
        </button>
      </div>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Cliente
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Email
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Teléfono
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Compras
              </th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr
                key={cliente.id}
                style={{
                  borderBottom: '1px solid var(--color-border-light)',
                  transition: 'background-color var(--transition-fast)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <div className="avatar">
                      {cliente.nombre.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span style={{ fontWeight: 500 }}>{cliente.nombre}</span>
                  </div>
                </td>
                <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <Mail size={16} />
                    {cliente.email}
                  </div>
                </td>
                <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <Phone size={16} />
                    {cliente.telefono}
                  </div>
                </td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>
                  {cliente.compras} compras
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
