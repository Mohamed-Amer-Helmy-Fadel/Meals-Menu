import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";
export const Category = ({ filterbyCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll >
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <div>
                  <button onClick={() => onFilter(cat)} className="btnn mx-2">
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h3>لا يوجد تصنيفات</h3>
          )}
        </Roll>
      </Col>
    </Row>
  );
};
export default Category;
