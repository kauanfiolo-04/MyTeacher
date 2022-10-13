import { Box, Dialog, Grid, TextField, DialogActions, Button, Snackbar } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listProfessors,
    nome, setNome,
    email, setEmail,
    professorSelected, setProfessorSelected,
    marcarAula,
    message, setMessage
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List
          professors={listProfessors}
          onSelect={(professor) => setProfessorSelected(professor)}
        ></List>
      </Box>

      <Dialog onClose={() => setProfessorSelected(null)} open={professorSelected !== null} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome "
              type="text"
              fullWidth
              value={nome}
              onChange={(bata) => setNome(bata.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Digite o e-mail"
              type="email"
              fullWidth
              value={email}
              onChange={(bata) => setEmail(bata.target.value)}
            />
          </Grid>

        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setProfessorSelected(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={()=> setMessage('')}
      />
    </div>
  )
}

export default Home
