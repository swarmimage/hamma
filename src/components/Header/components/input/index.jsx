import { Box, Button, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import styles from './styles.module.scss'
import { SeachIcon } from '@/icons/search-icon'
const SearchInput = () => {
  return (
     <Box>
      <InputGroup className={styles.inputGroup} >
        <Input
          placeholder="Искать товары"
          className={styles.input}
          borderWidth="2px" 
          borderColor="#4ecdc4"
          borderRadius={8}
          _hover
            borderRightRadius="8"
        />
        <InputRightElement>
          <IconButton className={'icon__button'}
            w={131}
            icon={<SeachIcon />}
            color="white"
            background="#4ecdc4"
            _hover={{ background: '#38b2ac' }}
            borderRightRadius="8"
            borderLeftRadius={"0"}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default SearchInput
