import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={this.props.courses}/>
            </div>
        );
    }
}
CoursesPage.propTypes = {
    courses: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
