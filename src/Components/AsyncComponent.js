import React, { Suspense } from 'react';

const AsyncComponent = props => {
    return <Suspense fallback={<h1>loading...</h1>}>{props.children}</Suspense>;
};

export default AsyncComponent;
