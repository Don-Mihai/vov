import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Preview from './pages/Preview/Preview';
import Main from './pages/Main/Main';
import RussianEquip from './pages/RussianEquip/RussianEquip';
import ForeignEquip from './pages/ForeignEquip/ForeignEquip';
import RussianItem from './pages/RussianItem/RussianItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/preview',
    element: <Preview />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/russian-equip',
    element: <RussianEquip />,
  },
  {
    path: '/foreign-equip',
    element: <ForeignEquip />,
  },
  {
    path: '/russian-item/:id',
    element: <RussianItem />,
  },
  {
    path: '/foreign-item/:id',
    element: <RussianItem />,
  },
]);
root.render(<RouterProvider router={router} />);
