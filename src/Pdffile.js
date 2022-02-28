import React, { useState, useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";
import Pdf from "./assets/document/Pdf.pdf";

const Pdffile = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: Pdf,
    page,
    canvasRef,
  });

  return (
    <div>
      <div>
        <canvas ref={canvasRef} />
        {Boolean(pdfDocument && pdfDocument.numPages) && (
          <nav>
            <ul className="pager">
              <li className="previous">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Previous
                </button>
              </li>
              <li className="next">
                <button
                  disabled={page === pdfDocument.numPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
export default Pdffile;
