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

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 5}} padding='10px' spacing={10}>
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
