import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import BlockPhoto  from '../../app/components/PhotoBlock';

describe('<BlockPhoto/>', function () {
    const props = {
        photo:{name: 'photo'}
    }

    const wrapper = shallow(<BlockPhoto {...props}/>);

    it('should have props', function () {
        const wrapper = mount(<BlockPhoto {...props}/>);
        expect(wrapper.prop('photo').name).to.equal('photo');
    });

    it('should have div', function () {
        expect(wrapper.find('.photo-view_img').type()).to.equal('div');
    });

    it('should have "photo-view_img" class for div', function () {
        const wrapper = mount(<BlockPhoto {...props}/>);
        expect(wrapper.find('div').prop('className')).to.equal('photo-view_img');
    });

});
