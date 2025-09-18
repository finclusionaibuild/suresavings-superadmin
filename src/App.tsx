import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardRouter from './components/DashboardRouter';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { Suspense, lazy } from 'react';

const SuperAdminLanding = lazy(() => import('./components/user-types/SuperAdmin'));

// Super Admin pages
import PlatformOverview from './pages/superadmin/PlatformOverview';
import RegionalManagement from './pages/superadmin/RegionalManagement';
import SuperAdminManagement from './pages/superadmin/AdminManagement';
import SystemHealth from './pages/superadmin/SystemHealth';
import SecurityCenter from './pages/superadmin/SecurityCenter';
import DatabaseManagement from './pages/superadmin/DatabaseManagement';
import PerformanceMonitor from './pages/superadmin/PerformanceMonitor';
import PlatformIntegrations from './pages/superadmin/PlatformIntegrations';
import BackupRecovery from './pages/superadmin/BackupRecovery';
import GlobalConfiguration from './pages/superadmin/GlobalConfiguration';
import SuperAdminRoleBasedAccessControl from './pages/superadmin/RoleBasedAccessControl';
import SuperAdminKYBManagement from './pages/superadmin/KYBManagement';
import WebhooksAPIConsole from './pages/superadmin/WebhooksAPIConsole';
import WalletManagement from './pages/superadmin/WalletManagement';
import NotificationsManagement from './pages/superadmin/NotificationsManagement';
import ProfileManagement from './pages/superadmin/ProfileManagement';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/role/super-admin" 
              element={
                <Suspense fallback={<div className="p-6">Loading...</div>}>
                  <SuperAdminLanding />
                </Suspense>
              } 
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout>
                    <DashboardRouter />
                  </Layout>
                </ProtectedRoute>
              }
            />
            
            {/* Super Admin Routes */}
            <Route
              path="/super-admin"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <SuperAdminDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/platform"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <PlatformOverview />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/regions"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <RegionalManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/admins"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <SuperAdminManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/system"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <SystemHealth />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/security"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <SecurityCenter />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/database"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <DatabaseManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/performance"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <PerformanceMonitor />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/integrations"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <PlatformIntegrations />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/backup"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <BackupRecovery />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/config"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <RoleBasedAccessControl />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/rbac"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <SuperAdminRoleBasedAccessControl />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/kyb"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <KYBManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/webhooks"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <WebhooksAPIConsole />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/wallets"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <WalletManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/notifications"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <NotificationsManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin/profiles"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <Layout>
                    <ProfileManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Super Admin feature routes remain as-is below */}
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;