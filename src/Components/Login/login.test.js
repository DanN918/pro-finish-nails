import React from 'react';
import {shallow} from 'enzyme';
import Login from './login';

describe('Login componenet operational', () => {
    it('renders without crashing', ()=> {
        shallow(<Login/>);
    })
})