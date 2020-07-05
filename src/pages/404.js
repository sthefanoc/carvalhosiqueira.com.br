import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { Component } from "react";
import { withPrefix } from 'gatsby';

class Page404 extends Component {
  
  render() {
  return (
    <PrimaryLayout>
      <div>Ops! Não achei essa.</div>
    </PrimaryLayout>
)}
};

export default Page404;