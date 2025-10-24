'use client';

import { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToasterContext = createContext();

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};

const ToastItem = ({ toast, onRemove }) => {
  const getToastStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-600 text-white';
      case 'error':
        return 'bg-red-600 text-white';
      case 'warning':
        return 'bg-yellow-600 text-white';
      case 'info':
      default:
        return 'bg-blue-600 text-white';
    }
  };

  const getToastIcon = (type) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'ℹ';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg max-w-sm ${getToastStyles(toast.type)}`}
    >
      <span className="text-lg">{getToastIcon(toast.type)}</span>
      <div className="flex-1">
        {toast.title && (
          <div className="font-semibold text-sm">{toast.title}</div>
        )}
        <div className="text-sm opacity-90">{toast.message}</div>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-white/70 hover:text-white transition-colors"
        aria-label="Bildirimi kapat"
      >
        ✕
      </button>
    </motion.div>
  );
};

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now() + Math.random();
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const contextValue = {
    addToast,
    removeToast,
    success: (message, title) => addToast({ type: 'success', message, title }),
    error: (message, title) => addToast({ type: 'error', message, title }),
    warning: (message, title) => addToast({ type: 'warning', message, title }),
    info: (message, title) => addToast({ type: 'info', message, title }),
  };

  return (
    <ToasterContext.Provider value={contextValue}>
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onRemove={removeToast}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToasterContext.Provider>
  );
};