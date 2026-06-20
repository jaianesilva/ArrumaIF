import React, { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import './styles.css'

import Sidebar from './components/Sidebar.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Chamados from './pages/Chamados.jsx'
import Andamento from './pages/Andamento.jsx'
import Locais from './pages/Locais.jsx'
import Categorias from './pages/Categorias.jsx'
import Usuarios from './pages/Usuarios.jsx'

const tema = createTheme({
  palette: {
    primary: {
      main: '#2d8c3e',
      dark: '#1e6b2e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f7f5',
    },
  },
  shape: { borderRadius: 8 },
})

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  const [paginaAtiva, setPaginaAtiva] = useState('dashboard')

  function fazerLogin(usuario) {
    setUsuarioLogado(usuario)
  }

  function fazerLogout() {
    setUsuarioLogado(null)
    setPaginaAtiva('dashboard')
  }

  function renderizarPagina() {
    switch (paginaAtiva) {
      case 'dashboard':  return <Dashboard />
      case 'chamados':   return <Chamados />
      case 'andamento':  return <Andamento />
      case 'locais':     return <Locais />
      case 'categorias': return <Categorias />
      case 'usuarios':   return <Usuarios />
      default:           return <Dashboard />
    }
  }

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      {!usuarioLogado ? (
        <Login onLogin={fazerLogin} />
      ) : (
        <div className="app-container">

          <Sidebar
            paginaAtiva={paginaAtiva}
            onNavegar={(pagina) => setPaginaAtiva(pagina)}
            usuarioLogado={usuarioLogado}
            onSair={fazerLogout}
          />

          <main className="conteudo-principal">
            {renderizarPagina()}
          </main>

        </div>
      )}
    </ThemeProvider>
  )
}

export default App
