import React from "react";
import classes from "./home.module.css";
import ContentPaneContainer from "../ContentPane/content-pane.container";
import axios from "axios";

class Home extends React.Component {
  state = {
    pageStack: [],
    currentDirectory: [],
    forwardPageStack: [],
  };

  componentDidMount() {
    axios.get("http://192.168.1.5:5000/api/folder-structure").then((res) => {
      const pageStack = [...this.state.pageStack];
      const currentDirectory = [...this.state.currentDirectory];
      pageStack.push(res.data);
      currentDirectory.push(res.data.name);
      this.setState({ pageStack, currentDirectory });
    });
  }

  folderClickHandler = (folderStructure) => {
    const pageStack = [...this.state.pageStack];
    const currentDirectory = [...this.state.currentDirectory];
    let forwardPageStack = [...this.state.forwardPageStack];
    if (pageStack.length === 1) {
      forwardPageStack = [];
    }
    currentDirectory.push(folderStructure.name);
    pageStack.push(folderStructure);

    this.setState({ pageStack, currentDirectory, forwardPageStack });
  };

  navigatorClickHandler(dir) {
    const pageStack = [...this.state.pageStack];
    const currentDirectory = [...this.state.currentDirectory];
    const forwardPageStack = [...this.state.forwardPageStack];
    let pageIndex;

    pageStack.forEach((page, i) => {
      if (page.name === dir) {
        pageIndex = i;
      }
    });
    if (pageIndex < pageStack.length - 1) {
      const lastPage = pageStack.splice(pageIndex + 1, pageStack.length);
      forwardPageStack.push(lastPage[0]);
      currentDirectory.splice(pageIndex + 1, currentDirectory.length);
    }

    this.setState({ pageStack, currentDirectory, forwardPageStack });
  }

  backClickHandler = () => {
    const pageStack = [...this.state.pageStack];
    const currentDirectory = [...this.state.currentDirectory];
    const forwardPageStack = [...this.state.forwardPageStack];

    if (pageStack.length > 1) {
      const lastPage = pageStack.pop();
      forwardPageStack.push(lastPage);
      currentDirectory.pop();
    }
    this.setState({ pageStack, forwardPageStack, currentDirectory });
  };

  forwardClickHandler = () => {
    const forwardPageStack = [...this.state.forwardPageStack];
    const pageStack = [...this.state.pageStack];
    const currentDirectory = [...this.state.currentDirectory];

    if (forwardPageStack.length > 0) {
      const lastPage = forwardPageStack.pop();
      pageStack.push(lastPage);
      currentDirectory.push(lastPage.name);
    }

    this.setState({ forwardPageStack, pageStack, currentDirectory });
  };

  render() {
    let contentPane;
    let currentDirectory = this.state.currentDirectory.map((dir, i) => (
      <span
        onClick={() => this.navigatorClickHandler(dir)}
        key={i}
        className={classes.Navigate}
      >
        {dir.length > 20 ? dir.substring(0, 20) + "..." : dir}
      </span>
    ));
    let navigator = [];
    currentDirectory.forEach((dir) => {
      navigator.push(dir);
      navigator.push("/");
    });
    if (this.state.pageStack.length > 0) {
      contentPane = (
        <ContentPaneContainer
          folderStructure={
            this.state.pageStack[this.state.pageStack.length - 1]
          }
          onFolderClicked={this.folderClickHandler}
        />
      );
    } else contentPane = <p>Loading..</p>;
    return (
      <div className={classes.Home}>
        <div className={classes.Heading}>
          <h1>My Piano Lessons</h1>
        </div>
        <div className={classes.NavigationBar}>
          <button
            disabled={this.state.pageStack.length === 1}
            onClick={this.backClickHandler}
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            disabled={this.state.forwardPageStack.length === 0}
            onClick={this.forwardClickHandler}
          >
            <i class="fas fa-arrow-right"></i>
          </button>
          {navigator}
        </div>
        {contentPane}
      </div>
    );
  }
}

export default Home;
