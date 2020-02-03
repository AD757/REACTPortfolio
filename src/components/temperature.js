import React from 'react';
import { Chip } from 'react-mdl';

const Temperature = (props) => props.temperature ? (
<Chip>{props.temperature} °C</Chip>) : (null)

export default Temperature