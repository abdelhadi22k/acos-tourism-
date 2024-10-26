import PropTypes from "prop-types"; // استيراد PropTypes
import { useState } from "react"; // استخدام useState
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import VrpanoOutlinedIcon from "@mui/icons-material/VrpanoOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../styles/Tourist.css";
import Container from "react-bootstrap/esm/Container";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const TouristBox = ({ data }) => {
  const value = 4.5;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container className="book_box_parent">
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Booking details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom className="Typography_img">
            <img src="assets/book1.jpg" alt="Book cover" />
          </Typography>

          <Typography gutterBottom>
            <h4> Challenge of designing lies in creating an application</h4>

            <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{labels[value]}</Box>
            </Box>

            <div>
            <button className="book_btn">
              <GradeOutlinedIcon
                sx={{ fontSize: 20, color: "#3D3D3D" }}
              />{" "}
              Rating
            </button>
            <button className="book_btn">
              <VrpanoOutlinedIcon
                sx={{ fontSize: 20, color: "#3D3D3D" }}
              />{" "}
              View room
            </button>
            <button className="book_btn">
              {" "}
              <EventNoteOutlinedIcon
                sx={{ fontSize: 20, color: "#3D3D3D" }}
              />{" "}
              Jul 2-7
            </button>
          </div>


          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
          <div className="book_box_price">
          <p>
            $144/<span>Night</span>
          </p>
          
        </div>
        </DialogContent>
        <DialogActions>
          <button className="book_New" onClick={handleClickOpen}>
            Book New
          </button>
        </DialogActions>
      </BootstrapDialog>

      <div className="book_box_holders">
        {currentItems.length !== 0 ? (
          currentItems.map((book, index) => {
            return (
              <div className="book_box" key={index}>
                <div className="book_box_img">
                  <FavoriteBorderOutlinedIcon
                    className="book_box_icon"
                    sx={{ fontSize: 30, color: "#3D3D3D" }}
                  />
                  <img src={book.book_img} alt="Book cover" />
                </div>

                <div className="book_box_info">
                  <h4>{book.title}</h4>
                  <div>
                    <button className="book_btn">
                      <GradeOutlinedIcon
                        sx={{ fontSize: 20, color: "#3D3D3D" }}
                      />{" "}
                      Rating
                    </button>
                    <button className="book_btn">
                      <VrpanoOutlinedIcon
                        sx={{ fontSize: 20, color: "#3D3D3D" }}
                      />{" "}
                      View room
                    </button>
                    <button className="book_btn">
                      {" "}
                      <EventNoteOutlinedIcon
                        sx={{ fontSize: 20, color: "#3D3D3D" }}
                      />{" "}
                      Jul 2-7
                    </button>
                  </div>
                  <div className="book_box_line"></div>

                  <div className="book_box_price">
                    <p>
                      ${book.price}/<span>Night</span>
                    </p>
                    <button className="book_New" onClick={handleClickOpen}>
                      Book New
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3> none</h3>
        )}
      </div>

      <Stack spacing={2} className="pagination">
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Container>
  );
};

TouristBox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      book_img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TouristBox;
