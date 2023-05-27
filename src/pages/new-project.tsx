import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import User from "../../public/user-tick.svg";
import star from "../../public/star.svg";
import books from "../../public/books.svg";
import FaqIcon from "../../public/FAQ-Circle.svg";
import arrow from "../../public/arrow-left.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//ToolTips
const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 126,
  },
});
const longText = `
Free for under 2,000 users
`;
const newProject = () => {
  //Slider POPUP
  var popupSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    accessibility: false,
    adaptiveHeight: true,
  };
  const slider = React.useRef(null);

  //New Chain
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  //CheckBox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Slider ref={slider} {...popupSlider}>
        {/* User Content */}
        <Box>
          <DialogTitle id="add-project">{"Where are your users?"}</DialogTitle>
          <DialogContent className="mt-6 pt-0 px-0 pb-8">
            <List className="proPop-list">
              <ListItem>
                <Image src={User} alt="Icon" />{" "}
                <Typography>Users have ERC20 Token or NFT contract</Typography>
              </ListItem>

              <ListItem>
                <Image src={star} alt="Icon" />{" "}
                <Typography>Users interacting a Specific contract </Typography>
              </ListItem>

              <ListItem>
                <Image src={books} alt="Icon" />{" "}
                <Typography>Address list by file or API</Typography>
              </ListItem>
            </List>
            <Button
              type="submit"
              className="btn-style mt-8 next-btn"
              onClick={() => slider?.current?.slickNext()}
            >
              Next
            </Button>
          </DialogContent>
        </Box>

        {/* Type Content */}
        <Box>
          <Button
            type="submit"
            className="back-btn"
            onClick={() => slider?.current?.slickPrev()}
          >
            <Image src={arrow} alt="" /> <span>Back</span>{" "}
          </Button>
          <DialogTitle id="add-project">{"Type"}</DialogTitle>
          <DialogContent className="mt-6 pt-0 px-0 pb-8">
            <Box>
              <FormControl fullWidth>
                <label htmlFor="blockchain">Chain</label>
                <Select
                  labelId="blockchain"
                  id="blockchain"
                  value={age}
                  onChange={handleChange}
                  className="select-style"
                >
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="mt-6">
              <form action="#">
                <Box>
                  <label htmlFor="email">Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jieoj590bjp340-34hpok45092849fh763vnwev3"
                    required
                  />
                </Box>
                <Box className="mt-6 bg-style2">
                  <label htmlFor="Network">Network</label>
                  <input
                    id="Network"
                    type="Network"
                    placeholder="GMT (Polygon) ERC20"
                    required
                  />
                </Box>
              </form>
            </Box>
            <Button
              type="submit"
              className="btn-style mt-8 next-btn"
              onClick={() => slider?.current?.slickNext()}
            >
              Next
            </Button>
          </DialogContent>
        </Box>

        {/* Option Content */}
        <Box>
          <Button
            type="submit"
            className="back-btn"
            onClick={() => slider?.current?.slickPrev()}
          >
            <Image src={arrow} alt="" /> <span>Back</span>
          </Button>
          <DialogTitle id="add-project">{"Options"}</DialogTitle>
          <DialogContent className="mt-6 pt-0 px-0 pb-6">
            <Box className="">
              <form action="#">
                <Box>
                  <label htmlFor="email">Project name:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Project_001"
                    required
                  />
                </Box>
                <Box className="flex items-center faq-tooltip mt-6">
                  <Checkbox {...label} />
                  <Typography>Capture only newest 2,000 users</Typography>
                  <Tooltip title={longText}>
                    <Button sx={{ m: 1 }}> <Image src={FaqIcon} alt="Icon" /> </Button>
                  </Tooltip>
                </Box>
              </form>
              <Button
                type="submit"
                className="btn-style mt-8 next-btn"
                onClick={() => slider?.current?.slickNext()}
              >
                Create
              </Button>
            </Box>
          </DialogContent>
        </Box>
      </Slider>
    </>
  );
};
export default newProject;
