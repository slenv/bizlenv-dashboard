import { useState } from 'react'
import { CreditCard, DollarSign } from 'lucide-react'

export default function PaymentModal({
  isOpen,
  onClose,
  total,
  onConfirm
}) {
  const [paymentMethod, setPaymentMethod] = useState('efectivo')
  const [amountReceived, setAmountReceived] = useState('')

  const change = paymentMethod === 'efectivo' ? parseFloat(amountReceived || 0) - total : 0

  const handleConfirm = () => {
    if (paymentMethod === 'tarjeta' || (paymentMethod === 'efectivo' && change >= 0 && amountReceived)) {
      onConfirm({ paymentMethod, amountReceived: parseFloat(amountReceived || total), change })
      // Reset state
      setPaymentMethod('efectivo')
      setAmountReceived('')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card max-w-md w-full p-6">
        <div className="space-y-4">
          {/* Total a Pagar */}
          <div className="p-4 bg-primary-light rounded-lg text-center">
            <p className="text-sm text-text-secondary mb-1">Total a Pagar</p>
            <p className="text-3xl font-bold text-primary">
              S/{total.toFixed(2)}
            </p>
          </div>

          {/* Método de Pago */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Método de Pago
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPaymentMethod('efectivo')}
                className={`p-3 rounded-lg border-2 transition-colors ${paymentMethod === 'efectivo'
                  ? 'border-primary bg-primary-light'
                  : 'border-border hover:border-primary'
                  }`}
              >
                <DollarSign size={24} className="mx-auto mb-1" />
                <p className="text-sm font-semibold">Efectivo</p>
              </button>
              <button
                onClick={() => setPaymentMethod('tarjeta')}
                className={`p-3 rounded-lg border-2 transition-colors ${paymentMethod === 'tarjeta'
                  ? 'border-primary bg-primary-light'
                  : 'border-border hover:border-primary'
                  }`}
              >
                <CreditCard size={24} className="mx-auto mb-1" />
                <p className="text-sm font-semibold">Tarjeta</p>
              </button>
            </div>
          </div>

          {/* Monto Recibido (solo efectivo) */}
          {paymentMethod === 'efectivo' && (
            <div>
              <label className="block text-sm font-semibold mb-2">
                Monto Recibido
              </label>
              <input
                type="number"
                step="0.01"
                value={amountReceived}
                onChange={(e) => setAmountReceived(e.target.value)}
                className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-lg text-lg font-semibold"
                placeholder="0.00"
                autoFocus
              />
              {change >= 0 && amountReceived && (
                <div className="mt-2 p-3 bg-bg-secondary rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Cambio:</span>
                    <span className="font-bold text-lg text-success">
                      ${change.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Botones */}
          <div className="grid grid-cols-2 gap-2 pt-4">
            <button
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              disabled={paymentMethod === 'efectivo' && (!amountReceived || change < 0)}
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
