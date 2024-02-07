import styled from "styled-components";


export const UserAvatarWrapper = styled.div`
    display: flex;
    align-items: flex-start;

`

export const UserAvatar = styled.aside`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 9px;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${props.img})`}

`

export const UserAvatarText = styled.p`
    color: var(--dark);
    font-size: 16px;
`