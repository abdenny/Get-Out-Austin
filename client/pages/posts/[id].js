import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import UserContext from "../../src/context/userContext.context";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PostingsMap from "../../components/map/PostingsMap.component";
import StripeButton from "../../components/stripe/stripe-button.component";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    height: "100vh",
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },
  paper: {
    margin: theme.spacing(6, 4),
    marginTop: 0,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100",
  },
  img: {
    // margin: theme.spacing(8, 4),
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    width: "90%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  fix: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
  },
  alert: {
    marginTop: 0,
    paddingTop: 0,
    marginBottom: theme.spacing(1),
  },
}));

export default (props) => {
  const classes = useStyles();
  const router = useRouter();
  console.log(props);
  const [postData, setData] = useState([]);
  const [guest_amount, setGuests] = useState(1);
  const [shouldComponentBeDisabled, enableStripe] = useState(true);
  const [isPostingPurchased, setPostingPurchased] = useState(false);
  const [postGuestData, setGuestData] = useState([]);

  const { userGlobal } = useContext(UserContext);

  let guestSelector = [];

  for (
    let i = 0;
    i <= postData.post_max_guests - postData.post_booked_guests;
    i++
  ) {
    guestSelector.push({ guestText: i });
  }

  const handleChange = (event) => {
    setGuests(event.target.value);
    if (event.target.value > 0) {
      enableStripe(false);
    }
  };

  useEffect(() => {
    if (router) {
      findPost();
    }
  }, [userGlobal]);

  let findPost = () => {
    if (userGlobal) {
      props.posts.forEach((post) => {
        console.log(post.id);
        if (post.id == router.query.id) {
          setData(post);
        }
      });
      props.post_guests.forEach((post_guest) => {
        if (
          post_guest.post_id == router.query.id &&
          post_guest.uid === userGlobal.uid
        ) {
          setPostingPurchased(true);
          setGuestData(post_guest);
        }
      });
    }
  };

  // let findIfBooked = () => {
  //   props.post_guest.forEach((post_guest)=> {
  //     if (post_guest.uid === )
  //   })
  // }

  return (
    <>
      {/* <h1>Get out post</h1>
      <span style={{ display: false }}>{JSON.stringify(postData)}</span>
      <p>Post id: {router.query.id}</p> */}
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={5} className={classes.image}>
          <PostingsMap />
        </Grid>
        <Grid item xs={12} sm={6} md={7} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {isPostingPurchased && (
              <Alert
                className={classes.alert}
                variant="outlined"
                severity="success"
              >
                You purchased this activity on{" "}
                {new Date(postGuestData.createdAt).toDateString()}.
              </Alert>
            )}
            <Typography variant="h3">{postData.post_title}</Typography>
            <div className={classes.form} noValidate>
              <img className={classes.img} src={postData.post_images}></img>
              <Typography className={classes.fix} component="h3" variant="h6">
                {postData.post_description}
              </Typography>

              <Typography
                className={classes.fix}
                component="h3"
                variant="body1"
              >
                Max Guests: {postData.post_max_guests}
              </Typography>
              <Typography component="h3" variant="body1">
                Minimum Guests: {postData.post_min_guests}
              </Typography>
              <Typography component="h3" variant="body1">
                # of Booked Guests: {postData.post_booked_guests}
              </Typography>
              <Typography component="h3" variant="body1">
                ${postData.post_price}
              </Typography>
              <InputLabel variant="body1" id="demo-simple-select-label">
                Number of Guests
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={guest_amount}
                onClick={handleChange}
              >
                {guestSelector.map((selector) => {
                  return (
                    <MenuItem value={selector.guestText}>
                      {selector.guestText}
                    </MenuItem>
                  );
                })}
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
              <StripeButton
                post_price={postData.post_price}
                post_id={postData.id}
                post_guests={guest_amount}
                disabled={shouldComponentBeDisabled}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <div>
                  Please use the test card for Stripe: 4242 4242 4242 4242 -
                  Exp: 01/21 - CW: 123
                </div>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch("http://localhost:3001/api/v1/posts");
  const posts = await res.json();
  const res2 = await fetch("http://localhost:3001/api/v1/posts/guests");
  const post_guests = await res2.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      post_guests,
    },
  };
}
