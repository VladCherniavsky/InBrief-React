/**
 * Created by User on 5/2/2017.
 */
import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import ShortedLink from '../ShortedLink';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


try {
    injectTapEventPlugin();
} catch (e) {
    /* empty */
}


describe('<ShortedLink />', () => {
    it('renders ShortedLink without crashing', () => {
        shallow(<ShortedLink />);
    });
    it('should render 1 <IconButton /> component', () => {
        const testString = 'abcdeg';
        const component = mount(
            <MuiThemeProvider>
                <ShortedLink shortedLink={testString}/>
            </MuiThemeProvider>);
        const IconButton = component.find('IconButton');

        expect(IconButton).to.have.length(1);
        const shortedLink = component.props().children.props.shortedLink;
        expect(shortedLink).to.equal(testString);
    });

    it('should render 1 <ContentCopyIcon /> inside <IconButton/ >', () => {
        const component = shallow(<ShortedLink />);
        const IconButton = component.find('IconButton');
        const icon = IconButton.find(ContentCopyIcon);
        expect(icon).to.have.length(1);
    });
});

