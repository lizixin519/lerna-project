'use strict';
import React, { useState, useEffect } from 'react';
import add from '@lerna-project/demo-core';
const Index = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        setNumber(add(1, 2));
    }, []);
    return <div>{number}</div>;
};

export default Index;
