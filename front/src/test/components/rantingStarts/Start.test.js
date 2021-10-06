import React from 'react'
import { shallow, mount } from 'enzyme'
import '@testing-library/jest-dom'
import { Start } from '../../../components/ratingStarts/Start'

describe('Pruebas en el componente <Start />',()=> {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<Start value={3} rating={4}/>)
        expect( wrapper).toMatchSnapshot()
    })
    test('Debe de seleccionar el rating de la estrella 4.5', () => {
        const wrapper = mount(<Start value={5} rating={4.5}/>)
        expect( wrapper).toMatchSnapshot()
        const isSelected = wrapper.find('input').prop('disabled').valueOf()
        expect( isSelected ).toBe( true )
 
        
    })

    
})