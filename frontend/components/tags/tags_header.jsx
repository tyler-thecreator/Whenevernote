import React from 'react';
import { Link } from 'react-router-dom';

import TagsIndex from './tags_index_container';

class TagsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  tagsMenu() {
    if (this.state.dropdownOpen) {
      return (
        <div className="tags-header-dropdown">

          <Link to="/tag/new">
            <div className="new-tag-item">

                <div id="new-tag-img" className="new-tag-child"></div>
                <button className="new-tag-child">Create new tag</button>
            </div>
          </Link>

          <TagsIndex
            tags={this.props.tags}
            noteId={this.props.noteId}
            iiCallback={'assign'}
          />
        </div>
      );
    }
  }

  toggleMenu(e) {
    e.preventDefault();
    if (this.state.dropdownOpen) {
      this.setState({ dropdownOpen: false });
    } else {
      this.setState({ dropdownOpen: true });
    }
  }

  render() {
    return (
      <div className="tags-header" onClick={this.toggleMenu}>
        <img
          id="tiny-tag"
          src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"/>

        <h3>Tags</h3>

        <img
          id="dropdown-arrow"
          src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495502846/dropdown.png"/>

        {this.tagsMenu()}
      </div>
    );
  }
}

export default TagsHeader;
