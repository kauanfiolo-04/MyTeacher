import { Box } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listProfessors }= useIndex();

  return (
   <Box sx={{backgroundColor: 'secondary.main'}}>
    <List professors={listProfessors}></List>
   </Box>
  )
}

export default Home
