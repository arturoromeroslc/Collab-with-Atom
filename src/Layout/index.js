import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/index.less';

const Layout = props => (
  <div className="app-layout">
    <Header />
    {React.Children.map(props.children, (child, i) => child) }
    <Footer />
  </div>
);

export default Layout;
