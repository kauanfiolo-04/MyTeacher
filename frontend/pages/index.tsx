import { Box, Dialog, Grid, TextField } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listProfessors } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List professors={listProfessors}></List>
      </Box>

      <Dialog open={true} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome "
              type="text"
              fullWidth
            />
          </Grid>
  
          <Grid item xs={12}>
            <TextField
              label="Digite o e-mail"
              type="email"
              fullWidth
            />
          </Grid>

        </Grid>
      </Dialog>
    </div>
  )
}

export default Home
