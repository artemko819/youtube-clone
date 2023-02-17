import { Box, Stack, Typography } from '@mui/material'
import { Sidebar } from 'components'
import React, { useState } from 'react'
import { Feedstyles } from 'utils/styles'

export const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack sx={Feedstyles.stack}>
      <Box sx={Feedstyles.boxFirst}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={Feedstyles.textFirst}>
          Copyright © 2023 Artem Uskov
        </Typography>
      </Box>
      <Box p={2} sx={Feedstyles.boxSecond}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          videos
        </Typography>
      </Box>
    </Stack>
  )
}
