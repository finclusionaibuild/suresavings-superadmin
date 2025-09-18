import React, { Suspense, lazy } from 'react';

const SuperAdminDashboard = lazy(() => import('../dashboards/SuperAdminDashboard'));

const DashboardRouter: React.FC = () => {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading dashboard...</div>}>
      <SuperAdminDashboard />
    </Suspense>
  );
};

export default DashboardRouter;


