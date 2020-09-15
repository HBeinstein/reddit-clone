import React from "react";
import NewPostForm from "./NewPostForm";
import PostDetail from "./PostDetail";
import PostList from "./PostList";
import EditPost from "./EditPost";
import AddCategory from "./AddCategory";
import BoardList from "./BoardList";
import PropTypes from "prop-types";

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

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleChangingSelectedCategory = (id) => {
    const selectedCategory = this.props.masterCategoryList[id];
    this.setState({selectedCategory: selectedCategory});
  }

  render(){
    let currentlyVisibleState = null;

    if(this.state.selectedCategory && !this.state.selectedPost){
      currentlyVisibleState = <PostList />
    } else if(this.state.selectedPost && this.state.formVisibleOnPage){
      currentlyVisibleState = <NewPostForm />
    } else if(this.state.selectedCategory && this.state.selectedPost) {
      currentlyVisibleState = <PostDetail />
    } else if(this.state.selectedPost && this.state.editing){
      currentlyVisibleState = <EditPost />
    } else if(this.state.selectedCategory && this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddBoard />
    } else if(this.state.editing && this.state.selectedCategory) {
      currentlyVisibleState = <EditBoard />
    } else {
      currentlyVisibleState = <BoardList />
    }

    /*
      Board view -- default else{}
      Posts of a board view  if(selectedCategory && !selectedPost)
      New Post Form (selected Post && formVisibleOnPage)
      Post Detail  if(selectedCategory &&selectedPost)
      Add Board   if (selectedCategory && FormVisibleONPage)

      edit post (if editing && selectedPost)
      edit board if(editing && selectedCategory)

      var's
      slected post
      selected Category
      editing
      formVisibleOnPage
    */
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
      );
    }
}

export default ForumControl;