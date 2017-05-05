/**
 * Created by User on 5/5/2017.
 */
import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Tag from '../Tag';


describe('<Tag />', () => {
    it('renders <Tag /> without crashing', () => {
        shallow(<Tag tag={'qwe'}/>);
    });

    it('check props for <Tag />  component', () => {
        const tag = 'asdasd';
        const component = mount(<Tag tag={tag}/>);
        expect(component.props().tag).to.equal(tag);
    });
});
