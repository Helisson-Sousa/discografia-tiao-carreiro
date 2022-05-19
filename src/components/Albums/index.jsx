import * as Styled from "./styles";
import P from "prop-types";

const secondsToTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(14, 19);
};

const Albums = ({ albums, onDeleteAlbum, onAddTrack, onDeleteTrack }) => {
  if (albums.length === 0) {
    return <p>Cadastre um album</p>;
  }

  return (
    <Styled.Albums>
      {albums.map((album) => (
        <Styled.Album key={album.name}>
          <Styled.AlbumTitle>
            Álbum: {album.name}, {album.year}
          </Styled.AlbumTitle>
          <Styled.SrcImg
            onClick={() => onDeleteAlbum(album.id)}
            src="./assets/minus.svg"
            alt="Remove Album"
          />
          <Styled.ButtonAddTrack onClick={() => onAddTrack(album.id)}>
            + Incluir Faixa
          </Styled.ButtonAddTrack>
          <Styled.Table>
            <colgroup>
              <col span="1" width="3%" />
              <col span="1" width="40%" />
              <col span="1" width="1%" />
              <col span="1" width="1%" />
            </colgroup>
            <thead>
              <tr>
                <th className="number">N°</th>
                <th>Faixa</th>
                <th className="duration">Duração</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {album.tracks.map((track) => (
                <tr key={track.number}>
                  <td className="number">{track.number}</td>
                  <td>{track.title}</td>
                  <td className="duration">{secondsToTime(track.duration)}</td>
                  <td>
                    <img
                      onClick={() => onDeleteTrack(track.id)}
                      src="./assets/minus.svg"
                      alt="Remover Faixa"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Styled.Table>
        </Styled.Album>
      ))}
    </Styled.Albums>
  );
};

export default Albums;

Albums.propTypes = {
  albums: P.array.isRequired,
  onDeleteAlbum: P.func,
  onDeleteTrack: P.func,
  onAddTrack: P.func,
};
