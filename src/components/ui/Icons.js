'use client';

import React from 'react';

// Modern SVG Icons to replace emojis with enhanced styling capabilities
const Icons = {
  // Service Icons
  Globe: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),

  Mobile: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),

  ShoppingCart: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="m1 1 4 4 12.68 3.84a2 2 0 0 1 1.36 2.47l-.74 3a2 2 0 0 1-1.97 1.69H8"/>
      <path d="M7 8h13l-1.68 7.84A2 2 0 0 1 16.36 17H8"/>
    </svg>
  ),

  Lightbulb: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M9 21h6"/>
      <path d="M12 3a6 6 0 0 0-6 6v6h12v-6a6 6 0 0 0-6-6Z"/>
    </svg>
  ),

  // Team Icons
  User: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),

  Code: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  ),

  Palette: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  ),

  Crown: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L14.8 8.87a1 1 0 0 0 1.518.116l4.74-4.05a.5.5 0 0 1 .84.656L18.96 19H5.04L2.102 5.592a.5.5 0 0 1 .84-.656l4.74 4.05A1 1 0 0 0 9.2 8.87l2.362-5.604Z"/>
    </svg>
  ),

  // Contact Icons
  MapPin: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),

  Phone: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),

  Mail: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-10 5L2 7"/>
    </svg>
  ),

  Clock: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  ),

  X: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="m18 6-12 12"/>
      <path d="m6 6 12 12"/>
    </svg>
  ),

  // Additional Service Icons
  Building: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  ),

  Database: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
    </svg>
  ),

  CheckCircle: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),

  AlertTriangle: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="m12 17 .01 0"/>
    </svg>
  ),

  Server: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),

  Cookie: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="9" cy="9" r="1" fill="currentColor"/>
      <circle cx="15" cy="9" r="1" fill="currentColor"/>
      <circle cx="8" cy="15" r="1" fill="currentColor"/>
      <circle cx="16" cy="15" r="1" fill="currentColor"/>
      <circle cx="12" cy="6" r="1" fill="currentColor"/>
      <circle cx="6" cy="12" r="1" fill="currentColor"/>
      <circle cx="18" cy="12" r="1" fill="currentColor"/>
    </svg>
  ),

  Settings: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
  ),

  BarChart: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  ),

  Target: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
};

// Icon Wrapper Component for consistent styling
export const IconWrapper = ({ 
  icon, 
  size = "md", 
  variant = "primary", 
  className = "",
  children 
}) => {
  const sizeClasses = {
    sm: "p-2 w-8 h-8",
    md: "p-3 w-12 h-12", 
    lg: "p-4 w-16 h-16",
    xl: "p-6 w-20 h-20"
  };

  const variantClasses = {
    primary: "from-primary-500 to-primary-600",
    secondary: "from-secondary-500 to-secondary-600",
    accent: "from-accent-500 to-accent-600",
    success: "from-green-500 to-emerald-600",
    warning: "from-yellow-500 to-orange-600",
    danger: "from-red-500 to-pink-600",
    info: "from-blue-500 to-cyan-600",
    purple: "from-purple-500 to-indigo-600"
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8", 
    xl: "w-12 h-12"
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      bg-gradient-to-br ${variantClasses[variant]} 
      rounded-xl shadow-lg flex items-center justify-center
      transition-transform duration-300 hover:scale-110
      ${className}
    `}>
      {icon && React.createElement(Icons[icon], { 
        className: `${iconSizeClasses[size]} text-white`
      })}
      {children}
    </div>
  );
};

export default Icons;