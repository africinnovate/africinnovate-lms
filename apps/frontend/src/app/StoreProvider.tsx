'use client'
import { useRef } from 'react'
import { 
  makeStore,
  AppStore,
} from '@/lib/store'
import { setThemeState } from '@/lib/features/theme/themeSlice'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(setThemeState(false))
  }
  // const store = makeStore()
  persistStore(storeRef.current)

  return <Provider store={storeRef.current}>{children}</Provider>
}
