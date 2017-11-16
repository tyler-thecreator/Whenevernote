import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { convertFromRaw } from 'draft-js'
import timeSince from '../../util/app_util'

export default class NotesIndexItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.highlightedClass = this.highlightedClass.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.fetchSingleNote(this.props.initialNote.id)
  }

  highlightedClass() {
    if (this.props.notePath === this.props.linkPath) {
      return 'notes-index-item highlighted'
    }

    return 'notes-index-item'
  }

  render() {
    let { title, updated_at } = this.props.initialNote

    if (title.length > 30) {
      const trimmedTitle = `${title.slice(0, 29)}..`
      title = trimmedTitle
    }

    let body = convertFromRaw(JSON.parse(this.props.initialNote.body))
    body = body.getPlainText()
    const { linkPath } = this.props
    const lastUpdate = timeSince(new Date(updated_at))

    return (
      <div onClick={this.handleClick} className={this.highlightedClass()}>
        <Link to={linkPath}>
          <li>
            <h4 className="preview-title ii-child">{title}</h4>
            <h5 className="preview-time ii-child">{lastUpdate}</h5>
            <p className="preview-body ii-child">{body}</p>
          </li>
        </Link>
      </div>
    )
  }
}

NotesIndexItem.propTypes = {
  fetchSingleNote: PropTypes.func.isRequired,
  initialNote: PropTypes.object.isRequired,
  notePath: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired
}
