import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Producto from './Producto';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Producto match={{params: {id: "1"}, isExact: true, path: "/productos/:id", name: "Detalles producto"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
