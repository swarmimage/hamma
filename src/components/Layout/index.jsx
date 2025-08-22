import React from 'react'
import Header from '../Header'
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box pt={"110px"}>
                {children}
            </Box>
        </>
    )
}

export default Layout
