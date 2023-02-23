import styled from "styled-components";

export const StyledProductList = styled.ul`
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 3em;
    grid-auto-flow: row;

    li {
        list-style: none;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        p {
            padding-block-end: 1rem;
        }
    }
`;
