import { Container, Typography } from "@material-ui/icons";

const Header = (props) => {
  return (
    <Container component="header">
      <Typography variant="h1" color="primary">
        Entertainment Hub
      </Typography>
    </Container>
  );
};

export default Header;
