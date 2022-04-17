import React from "react";
import Permission from "./Permission";
import styled from 'styled-components';

const ListContainer = styled.table``;

const TableInfo = styled.label`
    padding: 10px;
    font-size: 24px;
`;

const specs = {
    headerData: {
        name: 'Name',
        location: 'Location',
        startTime: 'Start Time',
    }
}

const PermissionList = ({list, user}) => {

    return (
        <div>
            <TableInfo>List of all of {user.name}'s permissions:</TableInfo>
            <ListContainer>
                <tbody>
                    <Permission event={specs.headerData}/>
                    {list.map(item => <Permission event={item}/>)}
                </tbody>
            </ListContainer>
        </div>
    )
}

export default PermissionList;