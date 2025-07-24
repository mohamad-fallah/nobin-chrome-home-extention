import { type FC } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

interface CardsGridProps {}

const cardSizes = [
  { xs: 12, sm: 12, md: 3 },
  { xs: 12, sm: 6, md: 6 },
  { xs: 12, sm: 6, md: 3 },
  { xs: 12, sm: 12, md: 3 },
  { xs: 12, sm: 6, md: 6 },
  { xs: 12, sm: 6, md: 3 },
];

const CardsGrid: FC<CardsGridProps> = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {cardSizes.map((size, idx) => (
            <Grid key={idx} size={size}>
              <Card
                sx={{
                  minHeight: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CardsGrid;
