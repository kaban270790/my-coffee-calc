import React from 'react';
import Container from "@material-ui/core/Container";

type BodyType = {};

const Body = (props: React.PropsWithChildren<BodyType>) => {
    return <Container>{props.children}</Container>;
};
export default Body
