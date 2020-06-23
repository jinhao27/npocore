import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Organizations() {
  const [baseOrganizations, setBaseOrganizations] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [skip, setSkip] = useState(0);
  const [featuredOrganizations, setFeaturedOrganizations] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // FILTERS
  const [filtering, setFiltering] = useState(false);
  const [filterSearchText, setFilterSearchText] = useState("");
  const [filterTargetAudience, setFilterTargetAudience] = useState("");
  const [filterCause, setFilterCause] = useState("");
  const [filterInterest, setFilterInterest] = useState("");

  useEffect(() => {
    const filteredOrganizations = filterPipeline(baseOrganizations);
    setOrganizations(filteredOrganizations);
  }, [filterSearchText, filterTargetAudience, filterCause, filterInterest]);

  useEffect(() => {
    const handleScroll = (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        setSkip(Math.random() * 10);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // GET FEATURED ORGANIZATIONS
    fetch(`/api/get-featured-organizations`)
      .then((response) => {
        return response.json();
      })
      .then((featuredOrganizationsJson) => {
        setFeaturedOrganizations(featuredOrganizationsJson);
      });
  }, []);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const request = await fetch(`/api/get-organizations?skip=${organizations.length}`)
      const organizationsJson = await request.json()
      setOrganizations(organizations => filterPipeline([...organizations, ...organizationsJson]));
      setBaseOrganizations(baseOrganizations => filterPipeline([...baseOrganizations, ...organizationsJson]));
    }

    fetchOrganizations();
  }, [skip]);

  // FILTERING FUNCTIONS
  function uniq(array) {
    return Array.from(new Set(array));
  }

  const filterPipeline = (organizations) => {
    let filteredOrganizations = organizations;

    filteredOrganizations = filterOrganizationsBySearch(filteredOrganizations);
    filteredOrganizations = filterOrganizationsByTargetAudience(filteredOrganizations);
    filteredOrganizations = filterOrganizationsByCause(filteredOrganizations);
    filteredOrganizations = filterOrganizationsByInterest(filteredOrganizations);

    return filteredOrganizations.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name))===i);
  }

  const filterOrganizationsBySearch = (organizationsToFilter) => {
    const currentSearchText = filterSearchText.toLowerCase();

    if (currentSearchText === "") {
      return organizationsToFilter;
    } else {
      // FILTERING ORGANIZATIONS BY LOWERCASE SEARCH FILTER
      return organizationsToFilter.filter(organization => organization.name.toLowerCase().includes(currentSearchText));;
    }
  }

  const filterOrganizationsByTargetAudience = (organizationsToFilter) => {
    if (filterTargetAudience) {
      return organizationsToFilter.filter(organization => organization.targetAudiences.includes(filterTargetAudience));
    } else {
      return organizationsToFilter;
    }
  }

  const filterOrganizationsByCause = (organizationsToFilter) => {
    if (filterCause) {
      return organizationsToFilter.filter(organization => organization.causes.includes(filterCause));
    } else {
      return organizationsToFilter;
    }
  }

  const filterOrganizationsByInterest = (organizationsToFilter) => {
    if (filterInterest) {
      return organizationsToFilter.filter(organization => {
        if (organization.interests) {
          return organization.interests.includes(filterInterest)
        } else {
          return false;
        }
      });
    } else {
      return organizationsToFilter;
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
        <title>NPO Core - Nonprofit Organizations</title>
        <meta name="description" content="Look at our huge, curated list of nonprofit organizations that we've built up! Find a nonprofit organization to join, partner with, or simply get in contact with here on NPO Core!" />
      </Helmet>
      <div className="pb-5">
        <div className="options">
          <h1 className="mt-4">Organizations</h1>
          <a className="solid-cta-button" href="/organizations/map">Check out our organization map!</a>
        </div>

        <div className="organizations mt-5">
          {featuredOrganizations ? featuredOrganizations.map((organization, key) =>
            <div className="organization" key={key}>
              <div className="image-cropper-container">
                <div style={{ height: "50px" }} className="image-cropper">
                  {organization.logo ?
                    <img src={"https://npocore.s3-us-west-2.amazonaws.com/" + organization.logo} alt="" />
                    :
                    <img src="/static/img/no-logo.png" alt="" />
                  }
                </div>
                {organization.verifiedNonprofit ?
                  <img className="nonprofit-badge" src="/static/img/icons/501c3.svg" alt=""/>
                  :
                  <span></span>
                }
              </div>
              <div>
                <div className="organization-header">
                  <h4><a href={"/@" + organization.idName}>{organization.name}</a></h4>
                  <div className="organization-resources">
                    <a href={"mailto:"  + organization.email} target="_">
                      {organization.email ? <img src="/img/email.svg" alt="{organization.name} Email Address" /> : null}
                    </a>
                    <a href={"/@" + organization.idName}>
                      <img style={{transform: "translateY(-2px)"}} src="/img/external.svg" alt="{organization.name}" />
                    </a>
                  </div>
                </div>
                {organization.location.name ? <div><strong>Location:</strong> {organization.location.name}</div> : <span></span>}
                {organization.targetAudiences ?
                  <div><strong>Target Audiences:</strong> {organization.targetAudiences.join(", ")}</div>
                  :
                  <span></span>
                }
                {organization.causes ?
                  <div><strong>Causes:</strong> {organization.causes.join(", ")}</div>
                  :
                  <span></span>
                }
                <p className="organization-description"><strong>Description:</strong> {organization.description}</p>
                <div className="text-right mb-2">
                  <button className="btn btn-link p-0" onClick={readMore}>
                    <small>Read More</small>
                  </button>
                </div>
                <div className="organization-interests">
                  {(organization.interests || []).map((interest, key) =>
                    <small>{interest}</small>
                  )}
                </div>
              </div>
            </div>
          ) :
          <div className="text-center">
            <small>No featured organizations yet!</small>
          </div>
        }
        </div>

        <div className="mt-4 text-right">
          {showFilters ?
            <button className="toggle-filter" onClick={toggleFilters}>Filters &uarr;</button>
            :
            <button className="toggle-filter" onClick={toggleFilters}>Filters &darr;</button>
          }
        </div>

        {showFilters ?
          <div className="filters mt-3">
            <input className="form-control search-bar" type="text" placeholder="Filter by Name" onChange={event => setFilterSearchText(event.target.value)} />

            <select onChange={event => setFilterTargetAudience(event.target.value)} required>
              <option value="">All Target Audiences</option>
              <option value="Everyone">Everyone</option>
              <option value="Kids">Kids</option>
              <option value="Teens">Teens</option>
              <option value="Adults">Adults</option>
              <option value="Seniors">Seniors</option>
              <option value="Groups">Groups</option>
            </select>

            <select onChange={event => setFilterCause(event.target.value)} required>
              <option value="">All Causes</option>
              <option value="Advocacy and Human Rights">Advocacy and Human Rights</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Arts and Culture">Arts and Culture</option>
              <option value="Children and Youth">Children and Youth</option>
              <option value="Civil Rights and Social Action">Civil Rights and Social Action</option>
              <option value="Crisis Support">Crisis Support</option>
              <option value="Disaster Relief">Disaster Relief</option>
              <option value="Emergency and Safety">Emergency and Safety</option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Female Empowerment">Female Empowerment</option>
              <option value="Health">Health</option>
              <option value="Homeless and Housing">Homeless and Housing</option>
              <option value="Politics">Politics</option>
              <option value="LGBTQ+">LGBTQ+</option>
              <option value="Race and Ethnicity">Race and Ethnicity</option>
              <option value="Poverty Alleviation">Poverty Alleviation</option>
              <option value="Science and Technology">Science and Technology</option>
              <option value="Social Services">Social Services</option>
              <option value="Veterans and Military Families">Veterans and Military Families</option>
            </select>

            <select onChange={event => setFilterInterest(event.target.value)} required>
              <option value="">All Interests</option>
              <option value="Members">Members</option>
              <option value="Partnerships">Partnerships</option>
              <option value="Sponsors">Sponsors</option>
              <option value="Clients">Clients</option>
              <option value="Opportunities">Opportunities</option>
            </select>
          </div>
          :
          <span></span>
        }

        <div className="organizations mt-5">
          {organizations ? organizations.map((organization, key) =>
            <div className="organization" key={key}>
              <div className="image-cropper-container">
                <div style={{ height: "50px" }} className="image-cropper">
                  <a href={"/@" + organization.idName}>
                    {organization.logo ?
                      <img src={"https://npocore.s3-us-west-2.amazonaws.com/" + organization.logo} alt="" />
                      :
                      <img src="/static/img/no-logo.png" alt="" />
                    }
                  </a>
                </div>
                {organization.verifiedNonprofit ?
                  <img className="nonprofit-badge" src="/static/img/icons/501c3.svg" alt=""/>
                  :
                  <span></span>
                }
              </div>
              <div>
                <div className="organization-header">
                  <h4><a style={{ color: "black" }} href={"/@" + organization.idName}>{organization.name}</a></h4>
                  <div className="organization-resources">
                    <a href={"mailto:" + organization.email} target="_">
                      {organization.email ? <img src="/img/email.svg" alt="{organization.name} Email Address" /> : null}
                    </a>
                    <a href={"/@" + organization.idName}>
                      <img style={{transform: "translateY(-2px)"}} src="/img/external.svg" alt="{organization.name}" />
                    </a>
                  </div>
                </div>
                {organization.location.name ? <div><strong>Location:</strong> {organization.location.name}</div> : <span></span>}
                <div><strong>Target Audiences:</strong> {organization.targetAudiences.join(", ")}</div>
                <div><strong>Causes:</strong> {organization.causes.join(", ")}</div>
                <p className="organization-description"><strong>Description:</strong> {organization.description}</p>
                <div className="text-right mb-2">
                  <button className="btn btn-link p-0" onClick={readMore}>
                    <small>Read More</small>
                  </button>
                </div>
                <div className="organization-interests">
                  {(organization.interests || []).map((interest, key) =>
                    <small>{interest}</small>
                  )}
                </div>
              </div>
            </div>
          ) :
          <div className="text-center">
            <small>No organizations yet!</small>
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default Organizations;
