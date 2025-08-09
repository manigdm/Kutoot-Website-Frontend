'use client';

import React from 'react';
import classNames from 'classnames';
import styles from '@/components/CampaignTabs/CampaignTabs.module.css';

const CampaignTabs = ({ tabs, activeTab, setActiveTab }) => (
  <div className="d-flex flex-wrap justify-content-evenly mb-4">
    {tabs.map((tab) => (
      <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={classNames(
        'btn btn-sm rounded-pill',
        activeTab === tab ? `${styles.active_tab_btn}` : `${styles.inactive_tab_btn}`,
        styles.customButton
      )}
    >
      {tab}
    </button>
    ))}
  </div>
);

export default CampaignTabs;
