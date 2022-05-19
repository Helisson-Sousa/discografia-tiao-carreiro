import styled from "styled-components";

export const Albums = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Album = styled.div`
  margin-bottom: 30px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const AlbumTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-flex;

  img {
    width: 12px;
    margin-left: 15px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }

  img {
    width: 13px;
  }
`;

export const SrcImg = styled.img`
width: 16px;
cursor: pointer;
margin-left: 15px;
vertical-align: middle;
}

@media (max-width: 768px) {
  width: 13px;
`;

export const Table = styled.table`
  width: 100%;

  tr {
    text-align: left;
    color: #383838;
  }

  td {
    font-weight: normal;
    padding: 5px;
  }

  th {
    font-weight: normal;
  }

  .duration {
    width: 20px;
  }

  .number {
    width: 55px;
  }

  img {
    width: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    img {
      width: 13px;
    }
  }
`;

export const ButtonAddTrack = styled.button`
  background: transparent;
  color: #1a73e8;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 5px;
  }
`;
