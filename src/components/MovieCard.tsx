import { memo } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

const MemoStar = memo(Star);
const MemoClock = memo(Clock);

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <MemoStar /> {props.rating}
            </div>

            <div>
              <MemoClock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}