'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'

// Language options for India
export const LANGUAGES = {
  en: { code: 'en', name: 'English', nativeName: 'English' },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  te: { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  mr: { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  gu: { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  kn: { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  or: { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  pa: { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
} as const

export type LanguageCode = keyof typeof LANGUAGES

// Translation keys and their values
export const translations = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      selectLanguage: 'Select Language',
    },
    nav: {
      home: 'Home',
      vote: 'Vote',
      candidates: 'Candidates',
      results: 'Results',
      news: 'News',
      history: 'History',
      profile: 'Profile',
      login: 'Login',
      logout: 'Logout',
      register: 'Register',
    },
    hero: {
      title: 'Secure Digital Voting for India',
      subtitle: 'Your vote, your voice, your democracy - protected by blockchain technology',
      ctaVote: 'Cast Your Vote',
      ctaLearn: 'Learn More',
      trustBadge: 'Trusted by Election Commission of India',
    },
    voting: {
      process: 'Voting Process',
      step1: 'Secure Registration',
      step2: 'Biometric Verification',
      step3: 'Anonymous Voting',
      step4: 'Blockchain Confirmation',
    },
    security: {
      title: 'Bank-Level Security',
      anonymity: 'Complete Anonymity',
      immutable: 'Immutable Records',
      transparent: 'Transparent Process',
      verified: 'ECI Verified',
    },
  },
  hi: {
    common: {
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      submit: 'जमा करें',
      cancel: 'रद्द करें',
      save: 'सेव करें',
      edit: 'संपादित करें',
      delete: 'मिटाएं',
      close: 'बंद करें',
      back: 'पीछे',
      next: 'आगे',
      previous: 'पिछला',
      search: 'खोजें',
      filter: 'फिल्टर',
      clear: 'साफ करें',
      selectLanguage: 'भाषा चुनें',
    },
    nav: {
      home: 'होम',
      vote: 'मतदान',
      candidates: 'उम्मीदवार',
      results: 'परिणाम',
      news: 'समाचार',
      history: 'इतिहास',
      profile: 'प्रोफाइल',
      login: 'लॉगिन',
      logout: 'लॉगआउट',
      register: 'पंजीकरण',
    },
    hero: {
      title: 'भारत के लिए सुरक्षित डिजिटल मतदान',
      subtitle: 'आपका वोट, आपकी आवाज, आपका लोकतंत्र - ब्लॉकचेन तकनीक द्वारा सुरक्षित',
      ctaVote: 'अपना वोट डालें',
      ctaLearn: 'और जानें',
      trustBadge: 'भारतीय चुनाव आयोग द्वारा विश्वसनीय',
    },
    voting: {
      process: 'मतदान प्रक्रिया',
      step1: 'सुरक्षित पंजीकरण',
      step2: 'बायोमेट्रिक सत्यापन',
      step3: 'गुमनाम मतदान',
      step4: 'ब्लॉकचेन पुष्टि',
    },
    security: {
      title: 'बैंक-स्तरीय सुरक्षा',
      anonymity: 'पूर्ण गुमनामी',
      immutable: 'अपरिवर्तनीय रिकॉर्ड',
      transparent: 'पारदर्शी प्रक्रिया',
      verified: 'ECI सत्यापित',
    },
  },
  // Add more translations as needed
} as const

interface LanguageState {
  currentLanguage: LanguageCode
  isRTL: boolean
}

type LanguageAction = 
  | { type: 'SET_LANGUAGE'; payload: LanguageCode }

const initialState: LanguageState = {
  currentLanguage: 'en',
  isRTL: false,
}

function languageReducer(state: LanguageState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        currentLanguage: action.payload,
        isRTL: ['ur', 'ar'].includes(action.payload), // Add RTL languages if needed
      }
    default:
      return state
  }
}

interface LanguageContextType {
  state: LanguageState
  setLanguage: (language: LanguageCode) => void
  t: (section: keyof typeof translations.en, key: string) => string
  currentLanguage: LanguageCode
  availableLanguages: typeof LANGUAGES
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [state, dispatch] = useReducer(languageReducer, initialState)

  const setLanguage = (language: LanguageCode) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language })
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('bharatvote-language', language)
    }
  }

  const t = (section: keyof typeof translations.en, key: string): string => {
    const currentTranslations = translations[state.currentLanguage] || translations.en
    const sectionTranslations = currentTranslations[section]
    
    if (sectionTranslations && key in sectionTranslations) {
      return (sectionTranslations as any)[key]
    }
    
    // Fallback to English if translation not found
    const englishSection = translations.en[section]
    if (englishSection && key in englishSection) {
      return (englishSection as any)[key]
    }
    
    return key // Return key if no translation found
  }

  // Load saved language on mount
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('bharatvote-language') as LanguageCode
    if (savedLanguage && savedLanguage !== state.currentLanguage && savedLanguage in LANGUAGES) {
      setLanguage(savedLanguage)
    }
  }

  const value: LanguageContextType = {
    state,
    setLanguage,
    t,
    currentLanguage: state.currentLanguage,
    availableLanguages: LANGUAGES,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
