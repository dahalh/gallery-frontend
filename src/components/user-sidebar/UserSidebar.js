import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../system-state/systemSlice";
import { Link } from "react-router-dom";

export const UserSidebar = () => {
  const dispatch = useDispatch();
  const { showUserSidebar } = useSelector((state) => state.system);

  return (
    <>
      <Offcanvas
        show={showUserSidebar}
        onHide={() => dispatch(toggleSidebar())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i class="fa-solid fa-house-chimney"></i> Home
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i class="fa-solid fa-upload"></i> Upload
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i class="fa-solid fa-square"></i> Gallery
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
