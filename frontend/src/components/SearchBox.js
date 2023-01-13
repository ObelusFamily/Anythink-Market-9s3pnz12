import React from "react";
import { connect } from "react-redux";
import agent from "../agent";
import { SEARCH_ITEMS } from "../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
    onSearch: (pager, payload) => dispatch({ type: SEARCH_ITEMS, pager, payload }),
    resetSearch:  (pager, payload) => dispatch({ type: SEARCH_ITEMS, pager, payload }),
  });

const mapStateToProps = (state) =>  ({
    search: "",
});


const SearchBox = (props) => {
    const DEBOUNCE_TIME = 900;
    let filterTimeout

    const handleChange = (event) => {
        event.preventDefault();
        const query = event.target.value;
        clearTimeout(filterTimeout);

        if(query.length > 2){
            setTimeout(() => props.onSearch(agent.Items.search, agent.Items.search(query.toLowerCase())), DEBOUNCE_TIME);
        }
        if(query.length === 0){
            setTimeout(() => props.onSearch(agent.Items.all, agent.Items.all()), DEBOUNCE_TIME);
        }
    }

    return (
    <input onChange={handleChange}id="search-box" placeholder="What is that you truly desire?" style={{marginLeft: "10px", marginRight: "20px", width: "300px", padding: "5px"}}/>
    );
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
