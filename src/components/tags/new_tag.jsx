import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router-dom'

class NewTag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { currentUser, createTag, history } = this.props

    const tag = {
      name: this.state.name,
      author_id: currentUser.id
    }
    createTag(tag)
    history.push('/notes')
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.history.push('/notes')
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <section className="new-tag">
        <section className="nt-main-content">
          <img
            alt=""
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495746550/toolbar/new-tag.png"
          />
          <h4>CREATE TAG</h4>

          <form className="nt-form">
            <input
              type="text"
              placeholder="Name your tag"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <div className="nn-buttons">
              <button
                id="nt-cancel"
                onClick={this.handleCancel}
              >Cancel
              </button>

              <button
                id="nt-create"
                onClick={this.handleSubmit}
              >Create tag
              </button>

            </div>
          </form>
        </section>
      </section>
    )
  }
}

NewTag.propTypes = {
  createTag: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

export default withRouter(NewTag)
