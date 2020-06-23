import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Organizations() {
  const [basePosts, setBasePosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // FILTERS
  const [filterTitleSearchText, setFilterTitleSearchText] = useState("");
  const [filterContentSearchText, setFilterContentSearchText] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const request = await fetch(`/api/get-posts?skip=${posts.length}`)
      const postsJson = await request.json()
      setPosts(posts => filterPipeline([...posts, ...postsJson]));
      setBasePosts(basePosts => filterPipeline([...basePosts, ...postsJson]));
    }

    fetchPosts();
  }, [skip]);

  useEffect(() => {
    const handleScroll = (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        setSkip(Math.random() * 10);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // GET FEATURED POSTS
    fetch(`/api/get-featured-posts`)
      .then((response) => {
        return response.json();
      })
      .then((featuredPostsJson) => {
        setFeaturedPosts(featuredPostsJson);
      });
  }, []);

  useEffect(() => {
    const filteredPosts = filterPipeline(basePosts);
    setPosts(filteredPosts);
  }, [filterTitleSearchText, filterContentSearchText, filterType]);

  // FILTERING FUNCTIONS
  const filterPipeline = (posts) => {
    let filteredPosts = posts;

    filteredPosts = filterPostsByTitleSearch(filteredPosts);
    filteredPosts = filterPostsByContentSearch(filteredPosts);
    filteredPosts = filterPostsByType(filteredPosts);

    console.log(filteredPosts);
    console.log(filteredPosts.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i))

    return filteredPosts.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i);
  }

  const filterPostsByTitleSearch = (postsToFilter) => {
    const currentTitleSearchText = filterTitleSearchText.toLowerCase();

    if (currentTitleSearchText === "") {
      return postsToFilter;
    } else {
      // FILTERING ORGANIZATIONS BY LOWERCASE SEARCH FILTER
      return postsToFilter.filter(post => post.title.toLowerCase().includes(currentTitleSearchText));
    }
  }

  const filterPostsByContentSearch = (postsToFilter) => {
    const currentContentSearchText = filterContentSearchText.toLowerCase();

    if (currentContentSearchText === "") {
      return postsToFilter;
    } else {
      // FILTERING ORGANIZATIONS BY LOWERCASE SEARCH FILTER
      return postsToFilter.filter(post => post.content.toLowerCase().includes(currentContentSearchText));
    }
  }

  const filterPostsByType = (postsToFilter) => {
    if (filterType) {
      return postsToFilter.filter(post => post.type.name.includes(filterType));
    } else {
      return postsToFilter;
    }
  }

  const readMore = (event) => {
    const readMoreButton = event.target;
    readMoreButton.parentNode.style.display = "none";
    readMoreButton.parentNode.parentNode.parentNode.querySelector("p").className = "";
  }

  const toggleFilters = (event) => {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }

  return (
    <div>
      <Helmet>
        <title>NPO Core - Nonprofit Organization Opportunity Posts - Opportunities for everyone!</title>
      </Helmet>
      <div className="py-5">
        {featuredPosts.length ?
          <h1>Featured Opportunity Posts</h1>
          :
          <span></span>
        }
        <div className="organizations mt-5">
          {featuredPosts ? featuredPosts.map((post, key) =>
              <div className="post" key={key}>
              {post.image ?
                <div className="post-header">
                  <img className="post-header-image" src={"https://npocore.s3-us-west-2.amazonaws.com/" + post.image} alt=""/>
                </div>
                :
                <span></span>
              }
              <div className="p-3">
                <h3><a href={`/@${post.creator.idName}/post/${post._id}`}>{post.title}</a></h3>
                <strong>By: <a href={"/@" + post.creator.idName}>{post.creator.name}</a></strong>
                <br/>
                <small>Posted: { new Date(post.datetimePosted).toLocaleDateString("en-US") }</small>
                <p className="post-content mt-3">{post.content}</p>
                <div className="text-right">
                  <button id={post._id} className="btn btn-link p-0" onClick={readMore}>
                    <small>Read More</small>
                  </button>
                </div>
                <p><small style={{ "backgroundColor": post.type.color }} className="type">{post.type.name}</small></p>
                <a style={{ "backgroundColor": post.button.color || "#f28c41", "borderColor": post.button.color || "#f28c41" }} className="solid-cta-button" href={post.button.link || "#"} target="_blank">{post.button.text || "Button"}</a>
              </div>
            </div>
          ) :
          <div className="text-center">
            <small>No featured posts yet!</small>
          </div>
        }
        </div>

        <h1 className="mt-5">Opportunity Posts</h1>
        <p>
          Check out all of the opportunities that our registered NPOs have posted!
        </p>

        <div className="text-right">
          {showFilters ?
            <button className="toggle-filter" onClick={toggleFilters}>Filters &uarr;</button>
            :
            <button className="toggle-filter" onClick={toggleFilters}>Filters &darr;</button>
          }
        </div>

        {showFilters ?
          <div className="filters my-3">
            <input className="form-control search-bar" type="text" placeholder="Filter by Title" onChange={event => setFilterTitleSearchText(event.target.value)} />

            <input className="form-control search-bar" type="text" placeholder="Filter by Content" onChange={event => setFilterContentSearchText(event.target.value)} />

            <select onChange={event => setFilterType(event.target.value)} required>
              <option value="">All Post Types</option>
              <option value="Announcement">Announcement</option>
              <option value="Event">Event</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Job Opening">Job Opening</option>
            </select>
          </div>
          :
          <span></span>
        }

        <div className="posts mt-4">
          {posts ? posts.map((post, key) =>
            <div className="post" key={key}>
              {post.image ?
                <div className="post-header">
                  <img className="post-header-image" src={"https://npocore.s3-us-west-2.amazonaws.com/" + post.image} alt=""/>
                </div>
                :
                <span></span>
              }
              <div className="p-3">
                <h3><a href={`/@${post.creator.idName}/post/${post._id}`}><a href={`/@${post.creator.idName}/post/${post._id}`}>{post.title}</a></a></h3>
                <strong>By: <a href={"/@" + post.creator.idName}>{post.creator.name}</a></strong>
                <br/>
                <small>Posted: { new Date(post.datetimePosted).toLocaleDateString("en-US") }</small>
                <p className="post-content mt-3">{post.content}</p>
                <div className="text-right">
                  <button id={post._id} className="btn btn-link p-0" onClick={readMore}>
                    <small>Read More</small>
                  </button>
                </div>
                <p><small style={{ "backgroundColor": post.type.color }} className="type">{post.type.name}</small></p>
                <a style={{ "backgroundColor": post.button.color, "borderColor": post.button.color }} className="solid-cta-button" href={post.button.link} target="_blank">{post.button.text}</a>
              </div>
            </div>
          ) :
          <div className="text-center">
            <small>No opportunity posts yet!</small>
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default Organizations;
