import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/layout/Header'
import Sidebar from '@/layout/Sidebar'
import Dashboard from '@/pages/Dashboard'
import VentasPage from '@/pages/VentasPage'
import ProductosPage from '@/pages/ProductosPage'
import ClientesPage from '@/pages/ClientesPage'
import POSPage from '@/pages/POSPage'

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <div className="app-main">
          <Header
            isSidebarCollapsed={isSidebarCollapsed}
            setIsSidebarCollapsed={setIsSidebarCollapsed}
          />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pos" element={<POSPage />} />
              <Route path="/ventas" element={<VentasPage />} />
              <Route path="/ventas/nueva" element={<div className="card"><h2>Nueva Venta</h2><p>Formulario de nueva venta...</p></div>} />
              <Route path="/ventas/reportes" element={<div className="card"><h2>Reportes de Ventas</h2><p>Gráficos y reportes...</p></div>} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/productos/nuevo" element={<div className="card"><h2>Nuevo Producto</h2><p>Formulario de nuevo producto...</p></div>} />
              <Route path="/productos/categorias" element={<div className="card"><h2>Categorías</h2><p>Gestión de categorías...</p></div>} />
              <Route path="/clientes" element={<ClientesPage />} />
              <Route path="/reportes" element={<div className="card"><h2>Reportes</h2><p>Reportes generales del sistema...</p></div>} />
              <Route path="/facturas" element={<div className="card"><h2>Facturas</h2><p>Gestión de facturas...</p></div>} />
              <Route path="/pagos" element={<div className="card"><h2>Pagos</h2><p>Gestión de pagos...</p></div>} />
              <Route path="/configuracion" element={<div className="card"><h2>Configuración</h2><p>Configuración del sistema...</p></div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}