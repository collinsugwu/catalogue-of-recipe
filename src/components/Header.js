import React from 'react';
import Filter from './Filter';

const header = () => (
    <header>
        <ul>
            <li>Foody</li>
            <li><Filter></Filter></li>
            <li>Get dishes</li>
        </ul>
    </header>
);

export default header;