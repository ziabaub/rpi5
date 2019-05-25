import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

const  NavBarButton =({to,label,id}) => (
    <NavLink to={to} activeClassName={'active'} className={'nav-link'}><input type="submit" id={id} className="btn col m2 s12" value={label}/></NavLink>
);

class NavSearch extends Component {

    render() {
        return (

            <div className="container">
                <h3 className="center" style={{marginBottom: +'20px'}}>Occ search Engine <i className="material-icons medium hide-on-small-only" id="icons"/>
                </h3>
                <form>
                    <div className="input-field">
                        <i className="material-icons-prefix">public</i>
                        <input type="text" id="searchquery"/>
                        <label>Find whats happening in the US......</label>
                    </div>

                    <div className="row">
                        <NavBarButton to={'/search'} id={'searchBtn'} label={'Search'}/>
                        <input type="reset" id="resetBtn" className="btn col m2 s12 red right" value="clear" style={{marginTop: +'3px'}}/>
                    </div>
                </form>

                <div id="loader" style={{display: +'none'}}>
                    <div className="progress">
                        <div className="indeterminate"/>
                    </div>
                </div>

                <div className="row">
                    <div id="newsResults"/>
                    <br/><br/>
                    <NavBarButton to={'/more'} id={'getMore'} label={'More'}/>
                </div>
            </div>
        );
    }
}

export default NavSearch;
