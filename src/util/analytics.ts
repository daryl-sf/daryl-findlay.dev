import { getAnalytics, logEvent } from "firebase/analytics";

export const trackPageView = (page_path: string) => {
  const analytics = getAnalytics();
  logEvent(analytics, "page_view", { page_path });
};
