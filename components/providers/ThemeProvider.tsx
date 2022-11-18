"use client"
import { ChakraProvider } from '@chakra-ui/react'

export const ThemeProviders = ({ children }: {children: React.ReactNode}) => {
    return <ChakraProvider>{children}</ChakraProvider>
}