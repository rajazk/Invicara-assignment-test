import moment from "moment";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  CardActionArea,
} from "@mui/material/";
import { INewPostResponse, INewPost } from "../../store/types/newsPost";

type Props = {
  newsList: INewPostResponse | undefined;
};

const NewsPosts = ({ newsList }: Props) => {
  const data = newsList?.data;

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography component="h1" variant="h4" color="primary" gutterBottom>
        Headline News
      </Typography>
      <Grid container spacing={4}>
        {data &&
          data.map((news: INewPost, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea href={news.url}>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "56.25%",
                    }}
                    image={news.image}
                  />
                </CardActionArea>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {news.title}
                  </Typography>
                  <Typography>{news.description}</Typography>
                </CardContent>
                <Box p={2} display={"flex"} justifyContent={"space-between"}>
                  <Typography color="text.secondary">{news.author}</Typography>
                  <Typography color="text.secondary">
                    {moment(news.published_at).format("DD/MM/YYYY")}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default NewsPosts;
