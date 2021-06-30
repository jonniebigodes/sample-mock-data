import React from "react";
import { useQuery, gql } from "@apollo/client";

const AllFilmsQuery = gql`
  query AllFilmsQuery {
    allFilms {
      films {
        title
        episode_id: episodeID
        opening_crawl: openingCrawl
      }
    }
  }
`;

function useFetchFilms() {
  const { loading, error, data } = useQuery(AllFilmsQuery);

  const films = data ? data.allFilms.films : [];

  return { loading, error, films };
}

export function SampleGraphqlComponent() {
  const { loading, error, films } = useFetchFilms();

  if (loading) {
    return <p>Fetching data</p>;
  }

  if (error) {
    return <p>There was an error fetching the data!</p>;
  }

  return (
    <div className="films-grid">
      <div>GrapQL</div>
      {films.map((film) => (
        <div key={film.episode_id}>
          <article className="film-card">
            <h4 className="film-title">{film.title}</h4>
            <p>{film.opening_crawl}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
