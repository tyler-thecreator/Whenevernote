import React from 'react';
import NotesIndexItem from './notes_index_item_container';

class NotesIndex extends React.Component {

  componentWillMount() {
    this.props.fetchNotes().then(() => {
      this.props.history.push(`notes/${this.props.notes[0].id}`);
    });
  }

  render() {
    const notes = this.props.notes;
    const notesCount = notes.length;

    return (
      <section className="notes-index">
        <div className="notes-header">
          <h2>NOTES</h2>
          <h4>{notesCount} notes</h4>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map((note, idx) => (
              <NotesIndexItem
                linkPath={`/notes/${note.id}`}
                notePath={this.props.location.pathname}
                key={idx}
                initialNote={note} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default NotesIndex;
