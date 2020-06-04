// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// import Menu from "./../Images/NAIL SALON MENU.pdf";

// const Services = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess(document) {
//     setNumPages(document.numPages);
//   };

//   return (
//     <div>
//       <h1>This is service page</h1>
//       <Document file={Menu} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import Menu from "./../Images/NAIL SALON MENU.pdf";

function Services() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(document) {
    setNumPages(document.numPages);
  }

  return (
    <div>
      <Document file={Menu} onLoadSuccess={onDocumentLoadSuccess}>
      </Document>
    </div>
  );
}

export default Services;
