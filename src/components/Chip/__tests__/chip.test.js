/**
 * Created by User on 5/6/2017.
 */
import React from 'react';
import {shallow} from 'enzyme';
import Chip from '../Chip';


describe('<Chip />', () => {
    it('renders <Chip /> without crashing', () => {
        shallow(<Chip />);
    });
});
