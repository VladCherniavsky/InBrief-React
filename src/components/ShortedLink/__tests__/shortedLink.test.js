/**
 * Created by User on 5/2/2017.
 */
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ShortedLink from '../ShortedLink';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';

describe('<ShortedLink />', () => {
    it('renders ShortedLink without crashing', () => {
        shallow(<ShortedLink />);
    });

    it('should render 1 <IconButton /> component', () => {
        const component = shallow(<ShortedLink />);
        const IconButton = component.find('IconButton');
        expect(IconButton).to.have.length(1);
    });

    it('should render 1 <ContentCopyIcon /> inside <IconButton/ >', () => {
        const component = shallow(<ShortedLink />);
        const IconButton = component.find('IconButton');
        const icon = IconButton.find(ContentCopyIcon);
        expect(icon).to.have.length(1);
    });
});

