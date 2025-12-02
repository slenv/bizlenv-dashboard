import { Package, Plus, Search, Filter } from 'lucide-react'

export default function ProductosPage() {
  const productos = [
    { id: 1, nombre: 'Laptop HP ProBook', categoria: 'Electrónica', precio: 'S/899', stock: 15 },
    { id: 2, nombre: 'Mouse Logitech MX', categoria: 'Accesorios', precio: 'S/25', stock: 45 },
    { id: 3, nombre: 'Teclado Mecánico', categoria: 'Accesorios', precio: 'S/120', stock: 28 },
    { id: 4, nombre: 'Monitor LG 27"', categoria: 'Electrónica', precio: 'S/350', stock: 12 },
    { id: 5, nombre: 'Webcam HD', categoria: 'Accesorios', precio: 'S/75', stock: 33 },
  ]

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
            Productos
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
            Gestiona tu inventario de productos
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Nuevo Producto
        </button>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <div className="search-bar" style={{ flex: 1 }}>
            <Search size={20} color="var(--color-text-tertiary)" />
            <input type="text" placeholder="Buscar productos..." />
          </div>
          <button className="btn btn-secondary">
            <Filter size={20} />
            Filtros
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Producto
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Categoría
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Precio
              </th>
              <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr
                key={producto.id}
                style={{
                  borderBottom: '1px solid var(--color-border-light)',
                  transition: 'background-color var(--transition-fast)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 500 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Package size={20} color="var(--color-primary)" />
                    </div>
                    {producto.nombre}
                  </div>
                </td>
                <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                  {producto.categoria}
                </td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>
                  {producto.precio}
                </td>
                <td style={{ padding: 'var(--spacing-md)' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: producto.stock > 20 ? 'var(--color-primary-light)' : '#fff3cd',
                    color: producto.stock > 20 ? 'var(--color-primary)' : '#856404'
                  }}>
                    {producto.stock} unidades
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
