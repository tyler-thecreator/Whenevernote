import React from 'react';
import PropTypes from 'prop-types';
import NotebooksIndexItem from './notebooks_index_item';

export default class NotebooksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks;
    const notesCount = this.props.notesCount;

    return (
      <div className="notebooks-index">
        <ul>
          {
            notebooks.map(notebook => (
              <NotebooksIndexItem
                notebook={notebook}
                note={this.props.note}
                updateNote={this.props.updateNote}
                iiCallback={this.props.iiCallback}
                notesCount={notesCount}
                key={notebook.id}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

NotebooksIndex.propTypes = {
  fetchNotebooks: PropTypes.func.isRequired,
  updateNote: PropTypes.func,
  iiCallback: PropTypes.string.isRequired,
  notesCount: PropTypes.bool.isRequired,
  note: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ])),
  notebooks: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};

NotebooksIndex.defaultProps = {
  note: {},
  updateNote: null,
};
