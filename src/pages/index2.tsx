import React from "react";
import { Poppins } from "next/font/google";
import {
  Box,
  List,
  ListItem,
  FormControl,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
  IconButton,
  InputBase,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  Fade,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import profile from "../../public/profile.svg";
import english from "../../public/en.svg";
import esIcon from "../../public/es.svg";
import dtIcon from "../../public/dt.svg";
import SearchIcon from "../../public/search-icon.svg";
import override from "../../public/override.svg";
import download from "../../public/download.svg";
import deleteIcon from "../../public/delete.svg";
import NewProject from "./new-project";
import close from "../../public/Close.svg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"],
});

export default function Home2() {
  const [age, setAge] = React.useState("10");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState("1");

  const tabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //Open Menu

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   Profile Btn
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorE2);
  const profileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const profileClose = () => {
    setAnchorE2(null);
  };

  //popup dailog project
  const [openProject, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const projectClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="header flex items-center justify-between">
        <Box className="flex items-center w-full">
          <Box className="logo">
            <Image src={logo} alt="logo" className="block img-full mx-auto" />
          </Box>
          <List className="m-0 p-0 flex items-center gap-4 w-full">
            <ListItem className="ps-9 p-0 min-w-[60%]">
              <Paper component="form" className="header-search">
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <Image src={SearchIcon} alt="Searchicon" />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Find project..."
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
            </ListItem>
            <ListItem className="p-0">
              <FormControl className="header-select">
                <Select
                  labelId="project-slect"
                  id="project-slect"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Projects</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem className="p-0 pe-8">
              <Button className="btn-style style-2" onClick={handleClickOpen}>
                New project
              </Button>
            </ListItem>
          </List>
        </Box>

        <Box className="flex items-center justify-end gap-10 max-w-[345px] w-full">
          <Box className="country-dropdown">
            <FormControl
              sx={{ m: 0, minWidth: 70 }}
              size="small"
              className="text-white"
            >
              <Select
                labelId="language"
                id="language"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>
                  <Image src={english} alt="english" /> EN
                </MenuItem>
                <MenuItem value={esIcon}>
                  <Image src={esIcon} alt="english" /> ES
                </MenuItem>
                <MenuItem value={dtIcon}>
                  <Image src={dtIcon} alt="english" /> DT
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="flex items-center gap-6">
            <Button
              id="profile-btn"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={profileClick}
              className="profile-btn"
            >
              <Typography className="text-base font-medium text-white">
                VinoCosta
              </Typography>
              <Image
                src={profile}
                alt="Profile"
                className="block img-full mx-auto"
              />
            </Button>
            <Menu
              anchorEl={anchorE2}
              open={open}
              onClose={profileClose}
              className="profile-menu"
            >
              <MenuItem onClick={profileClose}>Profile</MenuItem>
              <MenuItem onClick={profileClose}>My account</MenuItem>
              <MenuItem onClick={profileClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </header>
      <Box className="wrspper mt-12">
        <Typography variant="h1">Projects</Typography>
        <TableContainer component={Paper} className="mt-5">
          <Table className="project-table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Human</TableCell>
                <TableCell>Bots</TableCell>
                <TableCell>Ratio, %</TableCell>
                <TableCell>Created at</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="row">project_01</TableCell>
                <TableCell scope="row">163</TableCell>
                <TableCell scope="row">16</TableCell>
                <TableCell scope="row">34,5%</TableCell>
                <TableCell scope="row">03.29.2023 05:12 AM</TableCell>
                <TableCell>
                  <span className="greenWrapper">88</span>
                </TableCell>
                <TableCell>
                  <Box
                    className="active-btn"
                    aria-controls={openMenu ? "table-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Box>
                  <div>
                    <Menu
                      id="table-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Image src={override} alt="icon" /> Download
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Image src={download} alt="icon" /> Override{" "}
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Image src={deleteIcon} alt="icon" /> Delete
                      </MenuItem>
                    </Menu>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">project_01</TableCell>
                <TableCell scope="row">163</TableCell>
                <TableCell scope="row">16</TableCell>
                <TableCell scope="row">34,5%</TableCell>
                <TableCell scope="row">03.29.2023 05:12 AM</TableCell>
                <TableCell>
                  <span className="yellowWrapper">88</span>
                </TableCell>
                <TableCell>
                  <Box
                    className="active-btn"
                    aria-controls={openMenu ? "table-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Box>
                  <div>
                    <Menu
                      id="table-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Image src={override} alt="icon" /> Download
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Image src={download} alt="icon" /> Override
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Image src={deleteIcon} alt="icon" /> Delete
                      </MenuItem>
                    </Menu>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">project_01</TableCell>
                <TableCell scope="row">163</TableCell>
                <TableCell scope="row">16</TableCell>
                <TableCell scope="row">34,5%</TableCell>
                <TableCell scope="row">03.29.2023 05:12 AM</TableCell>
                <TableCell>
                  <span className="redWrapper">88</span>
                </TableCell>
                <TableCell>
                  <Box
                    className="active-btn"
                    aria-controls={openMenu ? "table-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Box>
                  <div>
                    <Menu
                      id="table-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Image src={override} alt="icon" /> Download
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Image src={download} alt="icon" /> Override
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Image src={deleteIcon} alt="icon" /> Delete
                      </MenuItem>
                    </Menu>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Link href="#" className="link">
          Show more
        </Link>
        {/* Project PoPUP model */}
        <Dialog
          open={openProject}
          onClose={projectClose}
          aria-labelledby="add-project"
          aria-describedby="add-project-description"
          className="popup-style"
        >
          <NewProject />
          <Button onClick={projectClose} className="popup-close">
            <Image src={close} alt="alt" />
          </Button>
        </Dialog>
      </Box>
    </>
  );
}
