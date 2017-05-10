/**
 * Created by Vlad on 5/8/2017.
 */
import React from 'react';
import {shallow} from 'enzyme';
import ConfirmWindow from '../confirmWindow';


describe('<ConfirmWindow />', () => {
    it('renders <ConfirmWindow /> without crashing', () => {
        shallow(<ConfirmWindow />);
    });
});
