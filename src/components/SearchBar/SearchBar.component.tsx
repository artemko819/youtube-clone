import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconButton, SearchInputStyle, SearchPaperStyle } from 'utils/styles';

export const SearchBar: React.FC = () => {

  const [search, setSearch] = useState('')

  return (
    <Paper
      component={"form"}
      onSubmit={() => { }}
      sx={SearchPaperStyle}
    >
      <input
        type="text"
        placeholder='Search...'
        style={SearchInputStyle}
      />
      <IconButton type="submit" sx={SearchIconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
