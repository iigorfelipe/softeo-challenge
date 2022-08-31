import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 0px 5px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  font-size: medium;
  padding: 5px;
`;

export const NextPage = styled.div`
  display: flex;
  font-size: medium;
  padding: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const Values = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 5px;
`;

export const IconQuestion = styled.div`
  display: flex;
  color: blue;
  font-size: 1.5em;
  margin-right: 15px;
  align-items: center;

  &:hover {
    color: red;
  }
`;
