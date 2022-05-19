import React from "react";
import * as Styled from "./styles";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Albums from "../../components/Albums";
import AddAlbum from "../../components/AddAlbum";
import AddTrack from "../../components/AddTrack";

// eslint-disable-next-line no-undef
const TOKEN = process.env.REACT_APP_API_TOKEN;

function Home() {
  const [albums, setalbums] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [visibleNewAlbum, setVisibleNewAlbum] = useState(false);
  const [visibleNewTrack, setVisibleNewTrack] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchAlbums();
  }, [keyword]);

  const fetchAlbums = async () => {
    const response = await fetch(
      `https://tiao.supliu.com.br/api/album?keyword=${keyword}&limit=10&page=1`,
      { headers: { Authorization: TOKEN } }
    );
    const json = await response.json();
    setalbums(json.data);
    setloading(false);
  };

  const handleSearch = (value) => {
    setkeyword(value);
  };

  const handleNewAlbum = () => {
    setVisibleNewAlbum(true);
  };

  const handleCancel = () => {
    setVisibleNewAlbum(false);
    setVisibleNewTrack(undefined);
  };

  const handleDeleteAlbum = async (id) => {
    setloading(true);

    const response = await fetch(`https://tiao.supliu.com.br/api/album/${id}`, {
      headers: {
        Authorization: TOKEN,
        "Content-type": "application/json",
      },
      method: "DELETE",
    });
    setloading(false);
    fetchAlbums();
  };

  const handleDeleteTrack = async (id) => {
    setloading(true);

    const response = await fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
      headers: {
        Authorization: TOKEN,
        "Content-type": "application/json",
      },
      method: "DELETE",
    });
    setloading(false);
    fetchAlbums();
  };

  const handleSaveAlbum = async (name, year) => {
    setVisibleNewAlbum(false);
    setloading(true);
    const response = await fetch(`https://tiao.supliu.com.br/api/album`, {
      headers: {
        Authorization: TOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, year: year }),
      method: "POST",
    });
    setloading(false);
    fetchAlbums();
  };

  const handleSaveTrack = async (title, number, duration) => {
    setVisibleNewTrack(undefined);
    setloading(true);
    const response = await fetch(`https://tiao.supliu.com.br/api/track`, {
      headers: {
        Authorization: TOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        number,
        duration,
        album_id: visibleNewTrack,
      }),
      method: "POST",
    });
    setloading(false);
    fetchAlbums();
  };

  const handleAddTrack = async (id) => {
    setVisibleNewTrack(id);
  };

  return (
    <>
      <Layout>
        <Header />
        <Styled.Content>
          <Search onSearch={handleSearch} />
          <Styled.Button onClick={handleNewAlbum}>+ Novo Albúm</Styled.Button>
          {visibleNewAlbum === true ? (
            <AddAlbum onCancel={handleCancel} onSave={handleSaveAlbum} />
          ) : null}
          {visibleNewTrack ? (
            <AddTrack onCancel={handleCancel} onSave={handleSaveTrack} />
          ) : null}
          {loading === true ? (
            <p>Carreganndo...</p>
          ) : (
            <Albums
              albums={albums}
              onDeleteAlbum={handleDeleteAlbum}
              onAddTrack={handleAddTrack}
              onDeleteTrack={handleDeleteTrack}
            />
          )}
        </Styled.Content>
      </Layout>
    </>
  );
}

export default Home;
