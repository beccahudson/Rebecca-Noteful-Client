import React from "react";
import { Link } from "react-router-dom";
import Folder from "./Folder";
import NotefulContext from "./NotefulContext";
import AddFolder from "./AddFolder";

class FolderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAddFolder: false,
    };
  }
  static contextType = NotefulContext;

  handleAddFolder = () => {
    this.setState({
      displayAddFolder: true,
    });
  };

  resetAddFolderState = () => {
    this.setState({
      displayAddFolder: false,
    });
  };

  renderCreateNewFolderButton() {
    return <button onClick={this.handleAddFolder}>Add Folder</button>;
  }

  renderNewFolderForm() {
    return (
      <AddFolder
        active={this.state.displayAddFolder}
        resetFunction={this.resetAddFolderState}
      />
    );
  }

  render() {
    const { folders } = this.context;
    let folderList = [];

    if (this.props.match.params.folderId) {
      folderList = folders.find(
        (folder) =>
          parseInt(folder.id) === parseInt(this.props.match.params.folderId)
      );
      folderList = (
        <Folder
          key={folderList.id}
          id={folderList.id}
          name={folderList.folder_name}
        />
      );
    } else {
      folderList = folders.map((folder) => {
        return (
          <Folder key={folder.id} id={folder.id} name={folder.folder_name} />
        );
      });
    }

    return (
      <div>
        <Link to="/">
          <h3 className="heading">ALL FOLDERS</h3>
        </Link>
        <ul>{folderList}</ul>
        {this.state.displayAddFolder && this.renderNewFolderForm()}
        {!this.state.displayAddFolder && this.renderCreateNewFolderButton()}
      </div>
    );
  }
}

export default FolderList;
