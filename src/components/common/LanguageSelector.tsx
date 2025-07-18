'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useLanguage, type LanguageCode } from '@/contexts/LanguageContext'

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage()

  const currentLang = availableLanguages[currentLanguage]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
      >
        <GlobeAltIcon className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.nativeName}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-strong border border-neutral-200 py-2 z-50"
          >
            {Object.entries(availableLanguages).map(([code, language]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code as LanguageCode)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-neutral-50 ${
                  currentLanguage === code 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-neutral-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{language.nativeName}</span>
                  <span className="text-xs text-neutral-500">{language.name}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
