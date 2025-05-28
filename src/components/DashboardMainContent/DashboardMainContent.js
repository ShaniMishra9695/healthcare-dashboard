import React from 'react';
import DashboardOverview from './DashboardOverview';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <main className="dashboard-main-content">
      <DashboardOverview />
      <div className="dashboard-sections">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
}

export default DashboardMainContent;