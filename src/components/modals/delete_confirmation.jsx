import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class DeleteConfirmation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount() {
    ReactModal.setAppElement('body')
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  handleDelete(e) {
    e.preventDefault()
    this.props.deleteNote(this.props.id).then(() => {
      this.closeModal()
      this.props.history.push('/notes')
    })
  }

  render() {
    const { title } = this.props
    const { modalIsOpen } = this.state

    return (
      <div>
        <button
          title="Delete Note"
          id="trash"
          className="detail-button"
          onClick={this.openModal}
        />

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Confirm Delete"
          className="delete-modal"
          overlayClassName="overlay"
        >

          <div className="delete-confirm">
            <img alt="" src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495221055/trash.png" />
            <h4>DELETE NOTE</h4>
            <h3>Are you sure you want to delete <strong>{title}</strong>?</h3>

            <div className="delete-buttons">
              <button
                id="delete-cancel"
                onClick={this.closeModal}
              >Close
              </button>

              <button
                id="delete-delete"
                onClick={this.handleDelete}
              >Delete
              </button>
            </div>

          </div>

        </ReactModal>
      </div>
    )
  }
}

DeleteConfirmation.propTypes = {
  title: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default withRouter(DeleteConfirmation)
