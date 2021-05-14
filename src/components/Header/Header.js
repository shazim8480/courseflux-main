import React from "react";
import headerStyles from "./HeaderStyle";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory, withRouter } from "react-router";
import { AppBar, Button, Link, useTheme } from "@material-ui/core";

import logo from "../../images/CourseFluxlogo.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory(); // for routing through link //
  const classes = headerStyles(); // for styling //

  // responsive functions start//
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  //   console.log(isMobile); // to see if the breakpoint is correct or not : will return true/false //

  // responsive functions end//

  // menu handler start //
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };
  // menu handler end //

  // menu items//
  const headerItems = [
    {
      headerTitle: "Home",
      pageURL: "/",
    },
    {
      headerTitle: "Courses",
      pageURL: "/courses",
    },
    {
      headerTitle: "Discussions",
      pageURL: "/discussions",
    },
    {
      headerTitle: "About Us",
      pageURL: "/about",
    },
    {
      headerTitle: "Profile",
      pageURL: "/profile",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <div align="left" variant="h4" className={classes.title}>
              <Link href="/home">
                <img className={classes.headerImg} src={logo} alt="logo_img" />
              </Link>
            </div>

            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    onClick={handleMenu}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {/* mapping for responsive */}
                    {headerItems.map((headerItem) => {
                      const { headerTitle, pageURL } = headerItem;
                      return (
                        <MenuItem
                          className={classes.responsiveNav}
                          onClick={() => handleMenuClick(pageURL)}
                        >
                          {headerTitle}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </>
              ) : (
                //   mapping for non-responsive //
                <div className={classes.menuList}>
                  {headerItems.map((headerItem) => {
                    const { headerTitle, pageURL } = headerItem;
                    return (
                      <Button
                        className={classes.navBtn}
                        color="secondary"
                        onClick={() => handleMenuClick(pageURL)}
                        size="large"
                      >
                        {headerTitle}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default withRouter(Header);
