import React from "react";
// import NewPostForm from "./NewPostForm";
// import PostDetail from "./PostDetail";
// import PostList from "./PostList";
// import EditPost from "./EditPost";
import AddBoard from "./AddBoard";
import BoardList from "./BoardList";
import PropTypes from "prop-types";
import Header from "./Header";
import EditBoard from "./EditBoard";
import { connect } from "react-redux";
import * as a from './../actions/index';

class ForumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      selectedCategory: null,
      editing: false,
      formVisibleOnPage: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleEditingBoard = (id) => {
    const newMasterBoardList = this.state.masterBoardList
  }

  handleAddingNewBoardToList = (newBoard) => {
    const { dispatch } = this.props;
    const action = a.addBoard(newBoard);
    dispatch(action);
    } 

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleChangingSelectedCategory = (id) => {
    const selectedCategory = this.props.masterCategoryList[id];
    this.setState({selectedCategory: selectedCategory});
  }

  handleHomeButtonClick = () => {
    this.setState({
      selectedPost: null,
      selectedCategory: null,
      editing: false,
      formVisibleOnPage: false})
  }

  handleDeleteBoard = (id) => {
    const newMasterBoardList = this.state.masterBoardList.filter(board => board.id !== id);
    this.setState({})
  }

  // if(this.state.selectedCategory && !this.state.selectedPost){
    // currentlyVisibleState = <PostList />
  // } else if(this.state.selectedPost && this.state.formVisibleOnPage){
  //   currentlyVisibleState = <NewPostForm />
  // } else if(this.state.selectedCategory && this.state.selectedPost) {
  //   currentlyVisibleState = <PostDetail />
  // } else if(this.state.selectedPost && this.state.editing){
  //   currentlyVisibleState = <EditPost />


  render(){
    let currentlyVisibleState = null;
    let navBarButtonText = "";

    if(this.state.selectedCategory && this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddBoard />
    } else if(this.state.editing && this.state.selectedCategory) {
      currentlyVisibleState = <EditBoard />
    } else {
      currentlyVisibleState = <BoardList boardList = {this.props.masterBoardList}/>
    }
    
    return (
      <React.Fragment>
        <Header onHomeButtonClick={this.handleHomeButtonClick} />
        {currentlyVisibleState}
      </React.Fragment>
      );
    }
}
    

const mapStateToProps = state => {
  return{
    masterBoardList: state.masterBoardList,
    masterPostList: state.masterPostList
  }  
}

ForumControl.propTypes = {
  masterBoardList: PropTypes.object,
  masterPostList: PropTypes.object
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;