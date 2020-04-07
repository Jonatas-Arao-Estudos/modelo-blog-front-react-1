import React from 'react';
import { Row } from 'react-bootstrap';

import { PageTitleStyled } from './styles';

export function PageTitle({ children }){
    return (
        <Row>
            <PageTitleStyled className="text-center mx-auto mb-3">{ children }</PageTitleStyled>
        </Row>
    )
}