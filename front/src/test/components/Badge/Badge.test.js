import React from 'react'
import { mount } from 'enzyme'
import { Badge } from '../../../components/Badge/Badge'

describe('Pruebas en el componente <Badge />',()=> {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(<Badge number={1}/>)
        expect( wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar el número correctamente', () => {
        const number = 2
        const wrapper = mount(<Badge number={2}/>)
        const textNumbered = wrapper.find('span')
        expect(  +textNumbered.text() ).toBe( number )
    })
    
})