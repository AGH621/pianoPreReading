import React from 'react';
import reportWebVitals from './reportWebVitals';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import ThreeNote from "./routes/three_note";
import FourNote from "./routes/four_note";
/*
import Invoice from "./routes/invoice";
*/


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="three_note" element={<ThreeNote />} />
            <Route path="four_note" element={<FourNote />} />

            <Route path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404: Sorry, it ain&#39;t gonna work</p>
                </main>
              }
            />
          </Route>
        </Routes>
    </BrowserRouter>
);

/*
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
    
        <Route path="invoices" element={<Invoices />}>
            <Route index 
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>Select an invoice</p>
                    </main>
                }
            />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
            
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404: Sorry, it ain&#39;t gonna work</p>
            </main>
          }
        />
      </Route>
    </Routes>
</BrowserRouter>
);*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
