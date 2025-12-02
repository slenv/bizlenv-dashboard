import { useState } from 'react'
import { Search, Plus, Minus, Trash2, X, ShoppingCart, Barcode } from 'lucide-react'
import PaymentModal from '@/components/PaymentModal'

export default function POSPage() {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  // Productos de ejemplo
  const productos = [
    { id: 1, nombre: 'Coca Cola 2L', precio: 2.50, codigo: '001', categoria: 'Bebidas', stock: 50 },
    { id: 2, nombre: 'Pan Integral', precio: 100, codigo: '002', categoria: 'Panadería', stock: 30 },
    { id: 3, nombre: 'Leche Entera 1L', precio: 1.20, codigo: '003', categoria: 'Lácteos', stock: 40 },
    { id: 4, nombre: 'Arroz 1kg', precio: 3.50, codigo: '004', categoria: 'Granos', stock: 25 },
    { id: 5, nombre: 'Aceite Vegetal', precio: 4.20, codigo: '005', categoria: 'Aceites', stock: 20 },
    { id: 6, nombre: 'Huevos x12', precio: 2.80, codigo: '006', categoria: 'Lácteos', stock: 35 },
    { id: 7, nombre: 'Azúcar 1kg', precio: 1.50, codigo: '007', categoria: 'Granos', stock: 45 },
    { id: 8, nombre: 'Café 250g', precio: 5.50, codigo: '008', categoria: 'Bebidas', stock: 15 },
    { id: 9, nombre: 'Papel Higiénico x4', precio: 3.20, codigo: '009', categoria: 'Limpieza', stock: 28 },
    { id: 10, nombre: 'Detergente 1L', precio: 2.90, codigo: '010', categoria: 'Limpieza', stock: 22 },
  ]

  const filteredProducts = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.codigo.includes(searchTerm)
  )

  const addToCart = (producto) => {
    const existingItem = cart.find(item => item.id === producto.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }])
    }
  }

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.cantidad + delta
        return newQuantity > 0 ? { ...item, cantidad: newQuantity } : item
      }
      return item
    }).filter(item => item.cantidad > 0))
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
  const tax = subtotal * 0.18 // 18% IGV
  const total = subtotal + tax

  const handlePayment = (paymentData) => {
    // Aquí iría la lógica de pago con los datos recibidos
    console.log('Pago procesado:', paymentData)
    alert(`Venta procesada exitosamente!\nMétodo: ${paymentData.paymentMethod}\nCambio: $${paymentData.change.toFixed(2)}`)
    setCart([])
    setShowPaymentModal(false)
  }

  return (
    <div className="h-[calc(100vh-112px)] flex gap-4 bg-bg-secondary">
      {/* Panel Izquierdo - Productos */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Búsqueda */}
        <div className="card p-4">
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 bg-bg-secondary rounded-lg px-4 py-2">
              <Search size={20} className="text-text-tertiary" />
              <input
                type="text"
                placeholder="Buscar por nombre o código de barras..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
            <button className="btn btn-ghost btn-icon">
              <Barcode size={20} />
            </button>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="flex-1 card p-4 overflow-y-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredProducts.map((producto) => (
              <button
                key={producto.id}
                onClick={() => addToCart(producto)}
                className="p-4 bg-bg-secondary hover:bg-bg-hover rounded-lg transition-colors text-left border border-border-light"
              >
                <div className="flex flex-col gap-2">
                  <div className="w-full h-20 bg-bg-tertiary rounded flex items-center justify-center">
                    <ShoppingCart size={32} className="text-text-tertiary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-text-primary line-clamp-2">
                      {producto.nombre}
                    </p>
                    <p className="text-xs text-text-tertiary mt-1">
                      Código: {producto.codigo}
                    </p>
                    <p className="text-lg font-bold text-primary mt-2">
                      S/{producto.precio.toFixed(2)}
                    </p>
                    <p className="text-xs text-text-secondary">
                      Stock: {producto.stock}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Panel Derecho - Carrito */}
      <div className="w-96 flex flex-col gap-4">
        {/* Header del Carrito */}
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Carrito de Venta</h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="btn btn-ghost btn-icon text-danger"
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Items del Carrito */}
        <div className="flex-1 card p-4 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-text-tertiary">
              <ShoppingCart size={48} className="mb-4" />
              <p>Carrito vacío</p>
              <p className="text-sm">Agrega productos para comenzar</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="p-3 bg-bg-secondary rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.nombre}</p>
                      <p className="text-xs text-text-tertiary">
                        S/{item.precio.toFixed(2)} c/u
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-danger hover:bg-bg-hover p-1 rounded"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-bg-tertiary hover:bg-bg-hover rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-bg-tertiary hover:bg-bg-hover rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-bold text-primary">
                      S/{(item.precio * item.cantidad).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totales */}
        <div className="card p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Subtotal:</span>
            <span className="font-semibold">S/{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">IGV (18%):</span>
            <span className="font-semibold">S/{tax.toFixed(2)}</span>
          </div>
          <div className="h-px bg-border-light" />
          <div className="flex justify-between text-lg">
            <span className="font-bold">Total:</span>
            <span className="font-bold text-primary text-2xl">
              S/{total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={clearCart}
            disabled={cart.length === 0}
            className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>
          <button
            onClick={() => setShowPaymentModal(true)}
            disabled={cart.length === 0}
            className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cobrar
          </button>
        </div>
      </div>

      {/* Modal de Pago */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        total={total}
        onConfirm={handlePayment}
      />
    </div>
  )
}
