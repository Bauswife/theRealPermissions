import React from "react";
import styled from 'styled-components';

const EventLabel = styled.td`
    text-align: left;
    padding: 10px;
    font-size: 16px;
`;

const Row = styled.tr`
    flex-direction: row;
`;

const Permission = ({event}) => {
    return (
        <Row>
            <EventLabel>
                {event.name}
            </EventLabel>
            <EventLabel>
                {event.location}
            </EventLabel>
            <EventLabel>
                {event.startTime}
            </EventLabel>
        </Row>
    );
};

export default Permission;