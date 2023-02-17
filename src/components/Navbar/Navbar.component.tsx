import { Stack } from '@mui/material'
import { SearchBar } from 'components/SearchBar'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from 'utils/constans'
import { NavStackStyle, NavStyleLogo } from 'utils/styles'

export const Navbar: React.FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={NavStackStyle}>
      <Link to={'/'} style={NavStyleLogo}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar/>
    </Stack>
  )
}
