import { getAnalytics, logEvent } from "firebase/analytics"

export const trackPageView = () => {
  const analytics = getAnalytics();
  logEvent(analytics, "page_view");
};
