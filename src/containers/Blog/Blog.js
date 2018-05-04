import React, { Component } from 'react'
// import axios from '../../axios'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css'
// import Posts from '../Posts/Posts'
// import NewPost from '../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
  return import('../NewPost/NewPost')
})

const AsyncPosts = asyncComponent(()=>{
  return import('../Posts/Posts')
})

class Blog extends Component {
  state = {
    auth: false,
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={AsyncPosts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    )
  }
}

export default Blog
