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
      editing: false
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

    if(this.state.selectedPost && this.state.selectedCategory === null){
      currentlyVisibleState = <
    }
  }

  return (

  );
}


export default ForumControl;