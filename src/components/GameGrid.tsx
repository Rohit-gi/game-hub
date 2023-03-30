import { SimpleGrid, Text } from "@chakra-ui/react";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Game } from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading && skeletons.map(skeleton => GameCardSkeleton key={skeletons})}
        {games.map(
          (game: {
            id: Key | null | undefined;
            name:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => (
            <GameCard key={game.id} game={game} />
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
