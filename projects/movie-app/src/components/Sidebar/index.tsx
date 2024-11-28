import { Box, Hidden, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../assets/sidebar-icons/icon-nav-home.svg";
import movieIcon from "../../assets/sidebar-icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/sidebar-icons/icon-nav-tv-series.svg";
import bookmarkIcon from '../../assets/sidebar-icons/icon-nav-bookmark.svg';

type Props = {};
const navlinks = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "Movie",
    icon: movieIcon,
    link: "/movie",
  },
  {
    name: "Series",
    icon: tvSeriesIcon,
    link: "/series",
  },
  {
    name: "Bookmark",
    icon: bookmarkIcon,
    link: "/bookmark",
  },
];

export default function Sidebar({}: Props) {
  const { pathname } = useLocation()
  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          gap: 5,
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
        >
        {/* <Hidden smDown> */}
          <Typography variant="h5" component="h1" my={2} fontSize={18}>
            Menu
          </Typography>
        {/* </Hidden> */}
        <Box
          sx={{
            // border:'2px solid red',
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navlinks.map((l) => (
            <Link key={l.name} to={l.link} style={{ textDecoration: "none",color:'white' }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
                >
                <img
                  src={l.icon}
                  alt={l.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === l.link
                      ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                      : "invert(84%)"
                    }`,
                  }}
                  />
                {/* <Hidden mdDown> */}
                  <Typography>{l.name}</Typography>
                {/* </Hidden> */}
              </Box>
            </Link>
          ))}
          
        </Box>
      </Box>
    </Box>
  );
}
