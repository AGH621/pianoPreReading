import React from 'react';
import reportWebVitals from './reportWebVitals';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import ThreeNote from "./routes/three_note";
import FourNote from "./routes/four_note";
import Home from "./routes/home";
import Usage from "./routes/usage";
import SongList from "./routes/song_list";
import Pentatonic from "./routes/pentatonic";
import Diatonic from "./routes/diatonic";
import songPage from "./routes/song_builder";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="three_note" element={<ThreeNote />} />
                <Route path=":songTitle" element={<songPage />} />
            <Route path="four_note" element={<FourNote />} />
            <Route path="usage" element={<Usage />} />
            <Route path="song_list" element={<SongList />} />
            <Route path="pentatonic" element={<Pentatonic />} />
            <Route path="diatonic" element={<Diatonic />} />

            <Route path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404: This ain&#39;t gonna work. Sorry &#39;bout that.</p>
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
