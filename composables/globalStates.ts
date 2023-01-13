export const useCounter = () => useState<number>('counter', () => 0)
export const useLocale = () => useState<string>('locale', () => 'cn')
export const useModal = () => useState<boolean>('Modal', () => false)
