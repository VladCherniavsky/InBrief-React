import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';

const CourseFrom = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage course</h1>
            <TextInput
                name="title"
                label="title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="category"
                value={course.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                label="length"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};
CourseFrom.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    loading: PropTypes.bool,
    errors: PropTypes.object,
    saving: PropTypes.bool
};

export default CourseFrom;
