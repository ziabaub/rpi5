import React from 'react';
import {withFormik} from 'formik';
import {NavLink} from "react-router-dom";
import {Field} from 'formik';
import "materialize-css/dist/css/materialize.min.css";
import newsapi from "../components/newsapi";

const NavBarButton = ({to, label, id}) => (
    <NavLink to={to} activeClassName={'active'} className={'nav-link'}>
        <input type="submit" id={id} className="btn col m2 s12" value={label}/>
    </NavLink>
);

export const MyForm = props => {

    const {
         //values,
        touched,
        errors,
        // handleChange,
        // handleBlur,
        handleSubmit,
    } = props;
    return (
        <div className="container">
            <h3 className="center" style={{marginBottom: +'20px'}}>Occ search Engine <i
                className="material-icons medium hide-on-small-only" id="icons"/>
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <i className="material-icons-prefix">public</i>
                    <Field type="text" id="searchquery" name="name"/>
                    <label>Find whats happening in the US......</label>
                </div>

                {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
                <div className="row">
                    {/*<NavBarButton to={'/more'} id={'searchBtn'} label={'Search'}/>*/}
                    <button type="submit" id='search' className="btn col m2 s12" >Search</button>
                </div>
                {/*<button type="submit">Submit</button>*/}

                <div id="loader" style={{display: +'none'}}>
                    <div className="progress">
                        <div className="indeterminate"/>
                    </div>
                </div>

                <div className="row">
                    <div id="newsResults" name="newsResults"/>
                    <br/><br/>
                    <NavBarButton to={'/more'} id={'getMore'} label={'More'}/>
                </div>
            </form>

        </div>


    );
};

export const SearchInit = withFormik({


    mapPropsToValues: () => ({name: '' , react: new newsapi().initializeInput('news')}),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }
        return errors;
    },

    handleSubmit: (values) => {
        setTimeout(() => {
            let s = new newsapi();
            s.initializeInput(values.name);
        }, 1000);
    },

    displayName: 'BasicForm',

})(MyForm);
