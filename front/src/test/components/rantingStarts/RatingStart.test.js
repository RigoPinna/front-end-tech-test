import React from 'react'
import { mount } from 'enzyme'
import '@testing-library/jest-dom'

import { RatingStart } from '../../../components/ratingStarts/RatingStart'

describe('Pruebas en el componente <RatingStart />',()=> {

    const wrapper = mount(<RatingStart _id={ 1 } rating={3} numReviews={ 12 }/>)
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar el número de reviews correctamente', () => {
      
        const textReview = wrapper.find('p').text();
        expect( textReview ).toBe("(12 Reviwers)")
    })

    test('Debe de mostrar 0 estrellas activas(Rating)', () => {
        const wrapper = mount(<RatingStart _id={ 1 } rating={0} numReviews={ 12 }/>)
        const starts = wrapper.find('input')
        let selected = starts.map( start => {
            return (start.prop('disabled').valueOf() === false) || false
        });
        selected = selected.filter( sl => sl === true )
        expect(selected.length ).toBe( 0 )
    })

    test('Debe de mostrar 3 estrellas activas(Rating)', () => {
       
        const starts = wrapper.find('input')
        let selected = starts.map( start => {
            return (start.prop('disabled').valueOf() === false) || false
        });
        selected = selected.filter( sl => sl === true )
        expect(selected.length ).toBe( 5 )
    })

})