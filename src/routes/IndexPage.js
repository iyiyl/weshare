import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div>hello world</div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);