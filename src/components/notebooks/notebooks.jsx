import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Sidebar from '../sidebar/sidebar'
import NotebookShow from '../notebooks/notebook_show'
import NoteDetail from '../notes/note_detail_container'
import NewNotebook from '../notebooks/new_notebook_container'

const Notebooks = (props) => {
  if (props.location.pathname === '/notebook/new') {
    return <NewNotebook />
  }

  return (
    <section className="notebooks">
      <Route path="/notebook" component={Sidebar} />
      <Route path="/notebook/:notebookId/notes" component={NotebookShow} />
      <Route path="/notebook/:notebookId/notes/:noteId" component={NoteDetail} />
    </section>
  )
}

Notebooks.propTypes = {
  location: PropTypes.object.isRequired
}

export default Notebooks
